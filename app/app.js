(function(){
  'use strict';

  angular.module('data-approve', [
    'ngRoute',
    'data-approve-main',
    'templates',
    'data-service',

    'ui.bootstrap'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .otherwise({
          redirectTo: '/'
        });
    });
    
})();