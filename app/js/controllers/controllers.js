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