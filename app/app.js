(function(){
  'use strict';

  angular.module('data-approve', [
    'ngRoute',
    'data-approve-main',
    'templates',
    'services',

    'ui.bootstrap'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .otherwise({
          redirectTo: '/'
        });
    });

  angular.module('services', ['data-service', 'utils', 'app.misc'])
    
})();