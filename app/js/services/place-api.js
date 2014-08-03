
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

