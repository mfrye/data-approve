
(function() {
  'use strict';

angular.module('data-service', [])

.factory('placeAPI', ['$http', function($http) {
  var BASE_URL = 'http://localhost:3000';

  var placeAPI = {};

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

  return placeAPI;

}]);

})();

