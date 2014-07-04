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