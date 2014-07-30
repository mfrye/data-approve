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