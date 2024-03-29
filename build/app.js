(function(){
  'use strict';

  angular.module('data-approve', [
    'tools.controllers',
    'tools.components',
    'templates',
    'services',

    'ui.router',
    'angularFileUpload',
    'ui.bootstrap',
    'custom.tables'
    ])
    

  angular.module('tools.controllers', []);

  angular.module('services', ['data-service', 'utils', 'app.misc'])
    
})();
'app controller goes here';
angular.module('data-approve')

.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
      
  $stateProvider
    .state('dashboard', {
      url: '',
      templateUrl: 'pages/dashboard/dashboard.html',
      controller: 'DashboardCtrl'
    })


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
      templateUrl: 'pages/scan-data/scan-data.html',
      abstract: true
    })
    .state('scan_data.geocode', {
      url: "/geocode",
      templateUrl: 'pages/scan-data/scan-data.geocode.html',
      controller: 'SetGeocodeCtrl'
    })
    .state('scan_data.shortnames', {
      url: "/shortnames",
      templateUrl: 'pages/scan-data/scan-data.shortnames.html',
      controller: 'ShortnamesCtrl'
    })

    // Manage Places
    .state('places', {
      url: "/places",
      templateUrl: 'pages/manage-places/places.html',
      abstract: true
    })
    .state('places.main', {
      url: '',
      templateUrl: 'pages/manage-places/places.main.html',
      controller: 'ManagePlacesCtrl'
    })
    .state('places.detail', {
      url: "/:id",
      templateUrl: 'pages/manage-places/places.detail.html',
      controller: 'ManagePlacesDetailCtrl'
    })

    .state('reviews', {
      url: "/get-reviews",
      templateUrl: 'pages/get-reviews.html',
      controller: 'GetReviewsCtrl'
    })
    
    $urlRouterProvider.otherwise('/config');
}]);

angular.module('tools.controllers')

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

  $scope.status = {
    loading: false,
    saving: false
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

    $scope.status.saving = true;

    console.log(places);

    placeAPI.savePlaces(places)
    .success(function(data) {

      $scope.status.saving = false;

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

    $scope.status.loading = true;

    placeAPI.getInfo(params)
    .success(function(data) {

      $scope.status.loading = false;

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

}]);
angular.module('tools.controllers')

.controller('DashboardCtrl', [ '$scope', 'placeAPI', function($scope, placeAPI) {

  var testdata = [
    {
      key: "One",
      y: 5
    },
    {
      key: "Two",
      y: 2
    },
    {
      key: "Three",
      y: 9
    },
    {
      key: "Four",
      y: 7
    },
    {
      key: "Five",
      y: 4
    },
    {
      key: "Six",
      y: 3
    },
    {
      key: "Seven",
      y: .5
    }
  ];


  function buildGraph(data) {
    nv.addGraph(function() {
        var width = 500,
            height = 500;

        var chart = nv.models.pieChart()
            .x(function(d) { return d.key })
            .y(function(d) { return d.y })
            .color(d3.scale.category10().range())
            .width(width)
            .height(height)
            .showLegend(true)
            ;

          d3.select("#test1")
              .datum(data)
            .transition().duration(1200)
              .attr('width', width)
              .attr('height', height)
              .call(chart);

        chart.dispatch.on('stateChange', function(e) { nv.log('New State:', JSON.stringify(e)); });

        return chart;
    });
  }

// nv.addGraph(function() {

//     var width = 500,
//         height = 500;

//     var chart = nv.models.donutChart()
//         .x(function(d) { return d.key })
//         //.y(function(d) { return d.value })
//         // .labelThreshold(.08)
//         .showLabels(false)
//         .color(d3.scale.category10().range())
//         .width(width)
//         .height(height);

//     chart.pie
//         .startAngle(function(d) { return d.startAngle/2 -Math.PI/2 })
//         .endAngle(function(d) { return d.endAngle/2 -Math.PI/2 });

//       //chart.pie.donutLabelsOutside(true).donut(true);

//       d3.select("#test2")
//           //.datum(historicalBarChart)
//           .datum(testdata)
//         .transition().duration(1200)
//           .attr('width', width)
//           .attr('height', height)
//           .call(chart);

//     return chart;
// });

  function getScore() {
    if (data[i].value.fb && data[i].value.google && data[i].value.yelp) {
        sum.none++;
      }
  }
  
  function processData(data) {
    var sum = {
      none: 0,
      google: 0,
      googleFacebook: 0,
      all: 0
    };

    data.forEach(function(row) {
      var count = 0
      
      if (row.value.google) {
        sum.google++;
      }
      if (row.value.google && row.value.fb) {
        sum.googleFacebook++;
      }

      if (row.value.google && row.value.fb && row.value.yelp) {
        sum.all++;
      }

      if (!row.value.google && !row.value.fb && !row.value.yelp) {
        sum.none++;
      }
    });

    return [
      {
        key: 'None',
        y: sum.none
      },
      {
        key: 'Google',
        y: sum.google
      },
      {
        key: 'Google and Facebook',
        y: sum.googleFacebook
      },
      {
        key: 'All',
        y: sum.all
      }
    ];
  }


  placeAPI.getConfigured()
  .success(function(data) {

    console.log(data);
    $scope.configured = data;

    console.log(processData(data.rows));

    buildGraph(processData(data.rows));

  });

}]);

(function() {
  
  angular.module('tools.controllers')

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
        { label: 'Name', map: 'value.name', cellTemplate: '<a ui-sref="places.detail({ id: dataRow.value._id })">{{ dataRow.value.name }}</a>' },
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
  
  .controller('ManagePlacesDetailCtrl',  [ '$scope', 'placeAPI', '$stateParams', function($scope, placeAPI, $stateParams) {

    var id = $stateParams.id;

    $scope.savePlace = function() {
      placeAPI.savePlace($scope.place)
      .success(function(data) {

      });
    };

    // Initialize
    placeAPI.getPlace(id)
    .success(function(data) {
      $scope.place = data;
    })

  }])
  ;

})();

(function() {
  angular.module('tools.controllers')

  .controller('SetGeocodeCtrl',  [ '$scope', 'placeAPI', function($scope, placeAPI) {

    $scope.setGeocode = function() {
      placeAPI.setGeocode()
      .success(function(data) {

      });
    };
  }])

  .controller('ShortnamesCtrl',  [ '$scope', 'placeAPI', function($scope, placeAPI) {

    $scope.newWord = {
      group_one: {},
      group_two: {}
    };

    $scope.shortNameConfig = {
      removeCompany: true,
      group_one: [],
      group_two: []
    };

    $scope.loading = {
      words: false,
      saving: false
    };

    function Word(options) {
      this.word = options.word;
      this.full_word = options.full_word || false;
    }

    // Add word to list
    $scope.addWord = function(ref, options) {
      var word = new Word(options);
      $scope.shortNameConfig[ref].push(word);
      $scope.newWord[ref] = {};
    };

    // Remove word from list
    $scope.removeWord = function(ref, word) {
      var list = $scope.shortNameConfig[ref];

      for (var i = 0, l = list.length; i < l; i++) {
        if (list[i] === word) {
          list.splice(i, 1);
          break;
        }
      }
    };

    // Search for most common words in name field of place
    $scope.commonWords = function() {
      $scope.loading.words = true;

      placeAPI.mostCommonWords('name')
      .success(function(data) {

        $scope.loading.words = false;

        $scope.commonWords = data;
      });
    };

    $scope.buildShortNames = function() {
      $scope.loading.saving = true;

      placeAPI.buildShortNames($scope.shortNameConfig)
      .success(function(data) {

        $scope.loading.saving = false;
        console.log(data);
      });
    };

  }]);

})();
(function(){
  'use strict';

  angular.module('tools.controllers')

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
    return $http({
      method: 'GET',
      url: BASE_URL + '/places'
    });
  };

  placeAPI.getConfigured = function() {
    return $http({
      method: 'GET',
      url: BASE_URL + '/places/summary/charts'
    })
  };

  placeAPI.savePlaces = function(data) {
    return $http({
      method: 'POST',
      url: BASE_URL + '/places',
      data: data
    });
  };

  placeAPI.getPlace = function(id) {
    return $http({
      method: 'GET',
      url: BASE_URL + '/places/' + id
    });
  };

  placeAPI.savePlace = function(place) {
    return $http({
      method: 'PUT',
      url: BASE_URL + '/places/' + place._id,
      data: place
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

  // Build shortnames
  // -----------------
  placeAPI.mostCommonWords = function(key) {
    return $http({
      method: 'GET',
      url: BASE_URL + '/config/word-frequency',
      params: {
        key: key
      }
    });
  };

  placeAPI.buildShortNames = function(config) {
    return $http({
      method: 'POST',
      url: BASE_URL + '/config/short-names',
      data: config
    });
  }

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