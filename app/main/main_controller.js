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

    .controller('MainCtrl', ['$scope', 'dealerAPI', function ($scope, dealerAPI) {

      $scope.state = null;

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

        if ($scope.state) {
          dealerAPI.getInfo($scope.state)
          .success(function(data) {

            $scope.dealers = processDealers(data);
          })
          .error(function(data) {
            console.log(data);
          });
        }
      };

    }]);

})();