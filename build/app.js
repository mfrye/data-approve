(function(){
  'use strict';

  angular.module('data-approve', [
    'ui.router',
    'tools.controllers',
    'tools.components',
    'templates',
    'services',

    'angularFileUpload',
    'ui.bootstrap',
    'custom.tables'
    ])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
      
      $stateProvider
        .state('upload', {
          url: "/upload-file",
          templateUrl: 'pages/upload-file.html',
          controller: 'UploadFileCtrl'
        })
        .state('config', {
          url: "/config",
          templateUrl: 'pages/config-place.html',
          controller: 'ConfigPlaceCtrl'
        })
        .state('scan_data', {
          url: "/scan-data",
          templateUrl: 'pages/scan-data.html',
          controller: 'ScanDataCtrl'
        })

        // Manage Places
        .state('places', {
          url: "/places",
          templateUrl: 'pages/places.html',
          abstract: true
        })
        .state('places.main', {
          url: '',
          templateUrl: 'pages/places.main.html',
          controller: 'ManagePlacesCtrl'
        })
        .state('places.detail', {
          url: "/:id",
          templateUrl: 'pages/places.detail.html',
          controller: 'ManagePlacesDetailCtrl'
        })

        .state('reviews', {
          url: "/get-reviews",
          templateUrl: 'pages/get-reviews.html',
          controller: 'GetReviewsCtrl'
        })
        
        $urlRouterProvider.otherwise('/config');
    }]);

  angular.module('services', ['data-service', 'utils', 'app.misc'])
    
})();
'app controller goes here';
(function() {
  'use strict';

angular.module('tools.components', [])

.directive('comparedValues', ['utils', function(utils) {
  return {
    scope: {
      place: '=',
      key: '=',
      provider: '='
    },
    restrict: 'EA',
    template: '<span><label>{{key}}</label>: {{value}}</span>',
    link: function(scope, elm, attrs) {

      scope.value = utils.getPropByString(scope.place, scope.key, scope.provider);

      console.log(scope.place);

      console.log(scope.key);
      console.log(scope.value);
    }
  }

}])

.filter('percentage', ['$filter', function($filter) {
    return function(input, decimals) {
        return $filter('number')(input*100, decimals)+'%';
    };
}]);

})();
(function(){
  'use strict';

  angular.module('tools.controllers',[])
    .controller('ManagePlacesCtrl',  [ '$scope', 'placeAPI', function($scope, placeAPI) {

      // Table filtering
      // ===============

      // pass in custom filters for this table
      var filterConfig = {
          filters: [
          {
              label: 'by state',
              param: 'state',
              template: 'text',
              filterFunc: function (item, filter) {
                  return item.value.address.state === filter.param_val;
              }
          },
          {
              label: 'google configured',
              param: 'google',
              template: 'select',
              options: [
              { label: 'False', value: false },
              { label: 'True', value: true}
              ],
              filterFunc: function (item, filter) {
                  return item.value.google.id === filter.param_val;
              }
          }]
      };

      // Table config
      // ============

      $scope.table = {
        data: [],
        filters: [],
        filterConfig: filterConfig,

        columns: [
          { label: 'Name', map: 'value.name' },
          { label: 'Street', map: 'value.address.street' },
          { label: 'State', map: 'value.address.state' },
          { label: 'Geocord', map: 'value.location.longitude' },
          { label: 'Google ID', map: 'value.google.id' },
          { label: 'Facebook ID', map: 'value.facebook.id' },
          { label: 'Yelp ID', map: 'value.yelp.id' },
        ],

        config: {
          selectionMode: 'multiple',
          displaySelectionCheckbox: true,
          //applyActions: applyActions,
          //manageActions: manageActions,
          tableClass: '',
          search: '',
        }
      }

      // Initialize
      placeAPI.getPlaces()
      .success(function(data) {
        $scope.table.data = data.rows;

        console.log($scope.table.data);
      })

    }])

    .controller('ScanDataCtrl',  [ '$scope', 'placeAPI', function($scope, placeAPI) {

      $scope.setGeocode = function() {
        placeAPI.setGeocode()
        .success(function(data) {

        });
      };

    }])

    .controller('UploadFileCtrl',  [ '$scope', 'placeAPI', function($scope, placeAPI) {


      // Upload file
      $scope.onFileSelect = function($files) {

        $scope.files = $files;

        for (var i = 0; i < $files.length; i++) {
          var file = $files[i];
          
          $scope.upload = placeAPI.upload(file, $scope.filename)
            .progress(function(evt) {
              console.log('percent: ' + parseInt(100.0 * evt.loaded / evt.total));
            })
            .success(function(data, status, headers, config) {
              // file is uploaded successfully
              console.log(data);
            })
            .error(function(data) {
              console.log(data);
            });
        }
      };

      $scope.uploadFile = function() {
        $scope.onFileSelect($scope.files);
      }

    }])

    .controller('ConfigPlaceCtrl', ['$scope', 'placeAPI', 'misc', 'utils', function ($scope, placeAPI, misc, utils) {

      // List of state to populate select
      $scope.stateOptions = misc.getStates;

      // List of providers
      $scope.providers = misc.getProviders;

      $scope.state = $scope.stateOptions[0].abbreviation;
      $scope.provider = $scope.providers[0];

      $scope.stats = {
        total: null,
        start: null,
        end: 0
      };

      var next = null;

      // Return value of compared fields
      $scope.comparedValue = utils.getPropByString;

      
      // Set possible match area to current open accordion
      $scope.showCurrentOpen = function(place, possible) {
        place.suggestion = possible;
      };
      

      // None of the results match
      $scope.setAsNone = function(dealer) {
        dealer.suggestion = null;
      };

      // Save current list of dealers
      $scope.savePlaces = function() {
        var places = utils.formatSave($scope.places.assess, $scope.provider);

        console.log(places);

        placeAPI.savePlace(places)
        .success(function(data) {

        })
        .error(function(data) {

        })
      };

      // Get dealers from backend
      $scope.getPlaces = function() {
        var params = {
          state: $scope.state,
          next: next,
          provider: $scope.provider
        };

        placeAPI.getInfo(params)
        .success(function(data) {

          $scope.places = utils.processPlaces(data);
          next = data.next;

          if (!$scope.stats.start) {
            $scope.stats.start = 0;
          } else {
            $scope.stats.start = $scope.stats.start + data.count;
          }

          $scope.stats.end = $scope.stats.end + data.count;

        })
        .error(function(data) {
          console.log(data);
        });
      };

    }])

    .controller('GetReviewsCtrl', ['$scope', 'placeAPI', 'misc', 'utils', function ($scope, placeAPI, misc, utils) {

      // List of state to populate select
      $scope.stateOptions = misc.getStates;

      // List of providers
      $scope.providers = misc.getProviders;

      $scope.state = $scope.stateOptions[0].abbreviation;
      $scope.provider = $scope.providers[0];

      $scope.stats = {
        total: null,
        start: null,
        end: 0
      };

      // Get dealers from backend
      $scope.getReviews = function() {
        var params = {
          state: $scope.state,
          provider: $scope.provider
        };

        placeAPI.getReviews(params)
        .success(function(data) {


        })
        .error(function(data) {
          console.log(data);
        });
      };

    }])

})();
(function() {
  angular.module('app.misc', [])

  .factory('misc', [function() {

    var misc = {};

    misc.getProviders = [
      'google',
      'yelp',
      'facebook',
    ];

    misc.getStates = [
        {
            "name": "Alabama",
            "abbreviation": "AL"
        },
        {
            "name": "Alaska",
            "abbreviation": "AK"
        },
        {
            "name": "American Samoa",
            "abbreviation": "AS"
        },
        {
            "name": "Arizona",
            "abbreviation": "AZ"
        },
        {
            "name": "Arkansas",
            "abbreviation": "AR"
        },
        {
            "name": "California",
            "abbreviation": "CA"
        },
        {
            "name": "Colorado",
            "abbreviation": "CO"
        },
        {
            "name": "Connecticut",
            "abbreviation": "CT"
        },
        {
            "name": "Delaware",
            "abbreviation": "DE"
        },
        {
            "name": "District Of Columbia",
            "abbreviation": "DC"
        },
        {
            "name": "Federated States Of Micronesia",
            "abbreviation": "FM"
        },
        {
            "name": "Florida",
            "abbreviation": "FL"
        },
        {
            "name": "Georgia",
            "abbreviation": "GA"
        },
        {
            "name": "Guam",
            "abbreviation": "GU"
        },
        {
            "name": "Hawaii",
            "abbreviation": "HI"
        },
        {
            "name": "Idaho",
            "abbreviation": "ID"
        },
        {
            "name": "Illinois",
            "abbreviation": "IL"
        },
        {
            "name": "Indiana",
            "abbreviation": "IN"
        },
        {
            "name": "Iowa",
            "abbreviation": "IA"
        },
        {
            "name": "Kansas",
            "abbreviation": "KS"
        },
        {
            "name": "Kentucky",
            "abbreviation": "KY"
        },
        {
            "name": "Louisiana",
            "abbreviation": "LA"
        },
        {
            "name": "Maine",
            "abbreviation": "ME"
        },
        {
            "name": "Marshall Islands",
            "abbreviation": "MH"
        },
        {
            "name": "Maryland",
            "abbreviation": "MD"
        },
        {
            "name": "Massachusetts",
            "abbreviation": "MA"
        },
        {
            "name": "Michigan",
            "abbreviation": "MI"
        },
        {
            "name": "Minnesota",
            "abbreviation": "MN"
        },
        {
            "name": "Mississippi",
            "abbreviation": "MS"
        },
        {
            "name": "Missouri",
            "abbreviation": "MO"
        },
        {
            "name": "Montana",
            "abbreviation": "MT"
        },
        {
            "name": "Nebraska",
            "abbreviation": "NE"
        },
        {
            "name": "Nevada",
            "abbreviation": "NV"
        },
        {
            "name": "New Hampshire",
            "abbreviation": "NH"
        },
        {
            "name": "New Jersey",
            "abbreviation": "NJ"
        },
        {
            "name": "New Mexico",
            "abbreviation": "NM"
        },
        {
            "name": "New York",
            "abbreviation": "NY"
        },
        {
            "name": "North Carolina",
            "abbreviation": "NC"
        },
        {
            "name": "North Dakota",
            "abbreviation": "ND"
        },
        {
            "name": "Northern Mariana Islands",
            "abbreviation": "MP"
        },
        {
            "name": "Ohio",
            "abbreviation": "OH"
        },
        {
            "name": "Oklahoma",
            "abbreviation": "OK"
        },
        {
            "name": "Oregon",
            "abbreviation": "OR"
        },
        {
            "name": "Palau",
            "abbreviation": "PW"
        },
        {
            "name": "Pennsylvania",
            "abbreviation": "PA"
        },
        {
            "name": "Puerto Rico",
            "abbreviation": "PR"
        },
        {
            "name": "Rhode Island",
            "abbreviation": "RI"
        },
        {
            "name": "South Carolina",
            "abbreviation": "SC"
        },
        {
            "name": "South Dakota",
            "abbreviation": "SD"
        },
        {
            "name": "Tennessee",
            "abbreviation": "TN"
        },
        {
            "name": "Texas",
            "abbreviation": "TX"
        },
        {
            "name": "Utah",
            "abbreviation": "UT"
        },
        {
            "name": "Vermont",
            "abbreviation": "VT"
        },
        {
            "name": "Virgin Islands",
            "abbreviation": "VI"
        },
        {
            "name": "Virginia",
            "abbreviation": "VA"
        },
        {
            "name": "Washington",
            "abbreviation": "WA"
        },
        {
            "name": "West Virginia",
            "abbreviation": "WV"
        },
        {
            "name": "Wisconsin",
            "abbreviation": "WI"
        },
        {
            "name": "Wyoming",
            "abbreviation": "WY"
        }
    ];

    return misc;
  }]);
})();

(function() {
  'use strict';

angular.module('data-service', [])

.factory('placeAPI', ['$http', '$upload', function($http, $upload) {
  var BASE_URL = 'http://localhost:3000';

  var placeAPI = {};

  placeAPI.getPlaces = function() {
    console.log('getting')
    return $http({
      method: 'GET',
      url: BASE_URL + '/places'
    });
  };

  // for configuring dealers - matching dealer with 3rd party api data
  placeAPI.getInfo = function(data) {
    return $http({
      method: 'GET',
      url: BASE_URL + '/config/provider/' + data.provider,
      params: {
        next: data.next,
        state: data.state
      }
    });
  };

  placeAPI.savePlace = function(data) {
    return $http({
      method: 'POST',
      url: BASE_URL + '/place',
      data: data
    });
  };

  placeAPI.getReviews = function(data) {
    return $http({
      method: 'GET',
      url: BASE_URL + '/config/reviews/' + data.provider,
      params: {
        next: data.next,
        state: data.state
      }
    });
  };

  placeAPI.upload = function(file, filename) {
    return $upload.upload({
      url: BASE_URL + '/company/places', 
      file: file,
      fileName: filename
    });
  };

  placeAPI.setGeocode = function() {
    return $http({
      method: 'GET',
      url: BASE_URL + '/config/geocode'
    });
  };

  return placeAPI;

}]);

})();


(function() {
  angular.module('utils', [])
  .factory('utils', [function() {
    var utils = {};

    // get value in obj from string reference
    utils.getPropByString = function(obj, propString, provider) {
      if (!propString)
          return obj;

      var prop, props = propString.split('.');

      var value;

      for (var i = 0, iLen = props.length - 1; i < iLen; i++) {
          prop = props[i];

          var candidate = obj[prop];
          if (candidate !== undefined) {
              obj = candidate;
          } else {
              break;
          }
      }

      value = obj[props[i]];

      // Check if array - for yelp API
      if (Array.isArray(value)) {
        value = value[0];
      }

      // Google has address clumped together (1234 example st, detroit)
      if (provider && provider === 'google' && propString === 'vicinity') {
        value = value.split(',')[0];
      }

      return value;
    };

    // Merge saved with found result from Google (get place_id)
    // Return arr of places to save
    utils.formatSave = function(places, provider) {
      var toSave = [];

      console.log(provider);

      for (var i = 0, l = places.length; i < l; i++) {

        // Only save places that have been selected (have a suggestion set)
        if (places[i].suggestion) {

          // Save formatting by provider
          switch(provider) {
            case 'google':
              places[i].saved.google.id = places[i].suggestion.place.place_id;
              break;
            case 'facebook':
              places[i].saved.facebook.id = places[i].suggestion.place.id;
              places[i].saved.facebook.url = places[i].suggestion.place.link;
              break;
            case 'yelp':
              places[i].saved.yelp.id = places[i].suggestion.place.id;
              places[i].saved.yelp.url = places[i].suggestion.place.url;
              break;
          }

          toSave.push(places[i].saved);
        }
      }
      return toSave;
    };

    // add opened field to all processed
    utils.processPlaces = function(places) {
      angular.forEach(places.assess, function(place) {
        for (var i = 0, l = place.processed.length; i < l; i++) {

          // set to show the first entry in accordion
          place.processed[i].open = i === 0 ? true : false;
        }
      });

      return places;
    };

    return utils;
  }])
})();