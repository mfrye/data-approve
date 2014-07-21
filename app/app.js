(function(){
  'use strict';

  angular.module('data-approve', [
    'ui.router',
    'tools.controllers',
    'tools.components',
    'templates',
    'services',

    'ui.bootstrap'
    ])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
      
      $stateProvider
        .state('config', {
          url: "/config",
          templateUrl: 'pages/config-place.html',
          controller: 'ConfigPlaceCtrl'
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