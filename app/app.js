(function(){
  'use strict';

  angular.module('data-approve', [
    'ui.router',
    'tools.controllers',
    'tools.components',
    'templates',
    'services',

    'angularFileUpload',
    'ui.bootstrap',
    'custom.tables'
    ])
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
          templateUrl: 'pages/scan-data.html',
          controller: 'ScanDataCtrl'
        })

        // Manage Places
        .state('places', {
          url: "/places",
          templateUrl: 'pages/places.html',
          abstract: true
        })
        .state('places.main', {
          url: '',
          templateUrl: 'pages/places.main.html',
          controller: 'ManagePlacesCtrl'
        })
        .state('places.detail', {
          url: "/:id",
          templateUrl: 'pages/places.detail.html',
          controller: 'ManagePlacesDetailCtrl'
        })

        .state('reviews', {
          url: "/get-reviews",
          templateUrl: 'pages/get-reviews.html',
          controller: 'GetReviewsCtrl'
        })
        
        $urlRouterProvider.otherwise('/config');
    }]);

  angular.module('services', ['data-service', 'utils', 'app.misc'])
    
})();