(function(){
  'use strict';

  angular.module('tools.controllers',[])
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