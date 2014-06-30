
(function() {
  'use strict';

angular.module('data-service', [])

.factory('dealerAPI', ['$http', function($http) {
  var BASE_URL = 'http://localhost:3000';

  var dealerAPI = {};

  // for configuring dealers - matching dealer with 3rd party api data
  dealerAPI.getInfo = function(state) {
    return $http({
      method: 'GET',
      url: BASE_URL + '/dealerships/update/' + state
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

