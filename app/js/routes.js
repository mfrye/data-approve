angular.module('data-approve')

.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
      
  $stateProvider
    .state('upload', {
      url: "/upload-file",
      templateUrl: 'pages/upload-file.html',
      controller: 'UploadFileCtrl'
    })
    .state('config', {
      url: "/config",
      templateUrl: 'pages/config-place.html',
      controller: 'ConfigPlaceCtrl'
    })

    .state('scan_data', {
      url: "/scan-data",
      templateUrl: 'pages/scan-data/scan-data.html',
      abstract: true
    })
    .state('scan_data.geocode', {
      url: "/geocode",
      templateUrl: 'pages/scan-data/scan-data.geocode.html',
      controller: 'SetGeocodeCtrl'
    })
    .state('scan_data.shortnames', {
      url: "/shortnames",
      templateUrl: 'pages/scan-data/scan-data.shortnames.html',
      controller: 'ShortnamesCtrl'
    })

    // Manage Places
    .state('places', {
      url: "/places",
      templateUrl: 'pages/manage-places/places.html',
      abstract: true
    })
    .state('places.main', {
      url: '',
      templateUrl: 'pages/manage-places/places.main.html',
      controller: 'ManagePlacesCtrl'
    })
    .state('places.detail', {
      url: "/:id",
      templateUrl: 'pages/manage-places/places.detail.html',
      controller: 'ManagePlacesDetailCtrl'
    })

    .state('reviews', {
      url: "/get-reviews",
      templateUrl: 'pages/get-reviews.html',
      controller: 'GetReviewsCtrl'
    })
    
    $urlRouterProvider.otherwise('/config');
}]);