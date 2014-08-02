(function(){
  'use strict';

  angular.module('data-approve', [
    'tools.controllers',
    'tools.components',
    'templates',
    'services',

    'ui.router',
    'angularFileUpload',
    'ui.bootstrap',
    'custom.tables'
    ])
    

  angular.module('tools.controllers', []);

  angular.module('services', ['data-service', 'utils', 'app.misc'])
    
})();