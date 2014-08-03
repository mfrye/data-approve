
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