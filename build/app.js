(function(){
  'use strict';

  angular.module('data-approve', [
    'ngRoute',
    'data-approve-main',
    'templates',
    'services',

    'ui.bootstrap'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .otherwise({
          redirectTo: '/'
        });
    });

  angular.module('services', ['data-service', 'utils', 'app.misc'])
    
})();
'app controller goes here';
'common service goes here';
(function(){
  'use strict';

  angular.module('data-approve-main',['ngRoute'])
    .config(function ($routeProvider) {
      console.log('hello');
      $routeProvider
        .when('/', {
          templateUrl: 'main/main.html',
          controller: 'MainCtrl'
        });
    })

    .controller('MainCtrl', ['$scope', 'dealerAPI', 'misc', function ($scope, dealerAPI, misc) {

      // List of state to populate select
      $scope.stateOptions = misc.getStates;

      // List of providers
      $scope.providers = [
        'google',
        'edmunds',
        'cars',
        'facebook',
        'twitter'
      ];

      $scope.stats = {
        total: null,
        start: null,
        end: 0
      };

      var next = null;

      // add opened field to all processed
      function processDealers(dealers) {
        angular.forEach(dealers.assess, function(dealer) {
          for (var i = 0, l = dealer.processed.length; i < l; i++) {

            // set to show the first entry in accordion
            dealer.processed[i].open = i === 0 ? true : false;
          }
        });

        return dealers;
      }

      // Set possible match area to current open accordion
      $scope.showCurrentOpen = function(dealer, possible) {
        dealer.suggestion = possible;
      };

      function formatSave(dealers) {
        var toSave = [];

        for (var i = 0, l = dealers.length; i < l; i++) {

          toSave.push({
            saved: dealers[i].saved,
            match: dealers[i].suggestion.dealer
          });
        }
        return toSave;
      }

      // None of the results match
      $scope.setAsNone = function(dealer) {
        dealer.suggestion = null;
      };

      // Save current list of dealers
      $scope.saveDealers = function() {
        var dealers = formatSave($scope.dealers.assess);

        dealerAPI.configDealer(dealers)
        .success(function(data) {

        })
        .error(function(data) {

        })
      };

      // Get dealers from backend
      $scope.getDealers = function() {
        var config = {
          state: $scope.state,
          next: next,
          provider: $scope.provider
        };

        if ($scope.state) {
          dealerAPI.getInfo(config)
          .success(function(data) {

            $scope.dealers = processDealers(data);
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
        }
      };

    }]);

})();

(function() {
  'use strict';

angular.module('data-service', [])

.factory('dealerAPI', ['$http', function($http) {
  var BASE_URL = 'http://localhost:3000';

  var dealerAPI = {};

  // for configuring dealers - matching dealer with 3rd party api data
  dealerAPI.getInfo = function(config) {
    return $http({
      method: 'GET',
      url: BASE_URL + '/dealerships/update/' + config.state,
      params: {
        next: config.next,
        provider: config.provider
      }
    });
  };

  dealerAPI.configDealer = function(data) {
    return $http({
      method: 'POST',
      url: BASE_URL + '/dealerships/update',
      data: data
    });
  };

  return dealerAPI;

}]);

})();


(function() {
  angular.module('app.misc', [])

  .factory('misc', [function() {

    var misc = {};

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
	angular.module('utils', [])
	.factory('utils', [function() {
		var utils = {};

		return utils;
	}])
})();