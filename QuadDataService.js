/*
  Data Service
  - an angular service that abstracts calls to QuadAPI and indexdb
  - manages data stored locally and updates when needed

  NOTE: Not being used now. Possibly redo to handle catId map, attr map, question meta map
*/

angular.module('quad.dataService', ['LocalForageModule'])

.config(['$localForageProvider', function($localForageProvider){
    $localForageProvider.config({
        name        : 'qt', // name of the database and prefix for your data
        storeName   : 'static', // name of the table
        description : 'local store of l2 exceptions'
    });
}])

.factory('dataAPI', ['$http', '$q', 'QuadAPIDataConvert', function($http, $q, QuadAPIDataConvert) {

    var endpoints = {};

    var BASE_URL = null,
    endpoint = null,
    url,
    diff_type;

    var endpointOpts = {
      "exres": '/v1/exresolver',
      "tools": '/v1/taskmanager'
    }

    var dataAPI = {};

    // set endpoints for api
    dataAPI.config = function (api_config, type) {
      BASE_URL = api_config;
      diff_type = type;
      endpoint = endpointOpts[type];
      url = api_config + endpoint;
    };

    // Get all info for all catIds
    // catIds can be passed in as an array
    dataAPI.category = function (catIds) {
      return $http({
        method: 'GET',
        url: BASE_URL + '/v1/itemcat',
        params: {
          itemCatQuadIDs: catIds
        }
      });
    };

    // attr map
    dataAPI.attribute = function (id) {
      var deferred = $q.defer();

      $http({
        method: 'GET',
        url: url + '/itemcategory/attributemap',
        params: {
          itemcategory: id
        }
      })
      .success(function(data) {
        data = QuadAPIDataConvert.convertMaps(data, id);
        deferred.resolve({
          data: data
        });
      });

      return deferred.promise;
    };


    // allowed values
    dataAPI.allowedValue = function (id) {
      var deferred = $q.defer();

      $http({
        method: 'GET',
        url: url + '/itemcategory/attributemap/allowedvalues',
        params: {
          itemcategory: id
        }
      })
      .success(function(data) {
        data = QuadAPIDataConvert.convertMaps(data, id);
        deferred.resolve({
          data: data
        });
      });

      return deferred.promise;
    };

    dataAPI.questionMeta = function() {
      return $http({
        method: 'GET',
        url: BASE_URL + '/v1/question/metadata'
      });
    };

    return dataAPI;

}])

/*
  Workflow
  ---------
  1. Look at local variable
  2. If nothing, check local storage
  3. If nothing, call API
  4. Set 1 and 2
*/

.factory('DataService', ['dataAPI', '$localForage', '$q', function(dataAPI, $localForage, $q) {

  var DataService = {};
  var local = {};
  var test = true;

  // functions to interact with cat info
  // -----------------------------------

  // Check local variable for value
  // If not found return false
  DataService.searchData = function (source, fieldKey, value, subFieldKey, subValue) {
    if (!source) { return false; }

    for (var i = 0, l = source.length; i < l; i++) {
      if (source[i][fieldKey] === value) {

        if (!subFieldKey) {
          return source[i];
        }

        // If subValue is defined look for that
        for (var j = 0, k = source[i].data.length; j < k; j++) {
          if (source[i].data[j][subFieldKey] === subValue) {
            return source[i].data[j];
          }
        }
        
      }
    }
    return false;
  }

  // Call API for data then store locally
  function callAPI(params, cb, refresh) {
    dataAPI[params.dataName](params.value)
    .then(function(res) {
      var data = res.data;

      // If refresh - create new array first
      if (refresh || !local[params.dataName]) {
        local[params.dataName] = [];
      }

      // Add value to local var
      if (_.isArray(data)) {
        for (var i = 0, l = data.length; i < l; i++) {
          local[params.dataName].push(data[i]);
        }
      } else {
        local[params.dataName].push(data);
      }

      // Set local storage
        $localForage.setItem(params.dataName, local[params.dataName])
        .then(function(data) {
          var row;

          if (params.subFieldKey && params.subValue) {
            row = DataService.searchData(data, params.fieldKey, params.value, params.subFieldKey, params.subValue);
          } else {
            row = DataService.searchData(data, params.fieldKey, params.value);
          }
          
          cb(row);
        });
      
    });
  }

  /* Load Data
    --------------------------
    - Call API for data then store it locally
    - Accepts refresh arg to hard reset data from server
  */
  function loadData(params, cb) {

    $localForage.getItem(params.dataName)
    .then(function(storedData) {
      var data;

      if (storedData) {
          if (params.subFieldKey && params.subValue) {
            data = DataService.searchData(storedData, params.fieldKey, params.value, params.subFieldKey, params.subValue);
          } else {
            data = DataService.searchData(storedData, params.fieldKey, params.value);
          }
      }

      // No data or force refresh is defined call API
      if (params.refresh || !storedData) {
        callAPI(params, cb, true);
      }

      // If row can't be found in stored data
      else if (!data) {
        callAPI(params, cb);
      }

      // Data found
      else {

        if (!local[params.dataName]) {
          local[params.dataName] = [];
        }

        // Add value to local var
        local[params.dataName].push(data);

        // Return
        cb(data);
      }

    }, function(err) {
      console.log('error');
    });
  };


  // Return question meta data using questionType
  // if data exists get it from local, else call server
  /*
    Params
    ------
    - dataName (String) - Name of data store (matches api name/endpoint)
    - fieldKey (String) - Key to use to find right row in data (generally id or something)
    - value (any type) - Value to compare to (find this id)
    - refresh (Boolean) - Optional: Whether to force refresh of local cache
  */
  DataService.getData = function(params) {
    var deferred = $q.defer();
    var localSearch;

    // Allow promise to be returned first
    setTimeout(function() {

      // Search in local variable
      var localSearch;

      if (params.subFieldKey && params.subValue) {
        localSearch = DataService.searchData(local[params.dataName], params.fieldKey, params.value, params.subFieldKey, params.subValue);
      } else {
        localSearch = DataService.searchData(local[params.dataName], params.fieldKey, params.value);
      }

      // if data can't be found look in local cache, then call localStorage, then finally call API
      if (!localSearch) {
        loadData(params, function(data) {
          deferred.resolve(data);
        });
      } else {
        deferred.resolve(localSearch);
      }
    });

    return deferred.promise;
  };

  // Set urls endpoints to use for all calls
  // Should set on app load
  DataService.config = function(api_config, type) {
    dataAPI.config(api_config, type);
  };

  return DataService;
}])