(function(){
	'use strict';

	angular.module('data-approve', [ 'ngRoute','data-approve-main','templates', 'data-service' ])
	  .config(function ($routeProvider) {
	    $routeProvider
	      .otherwise({
	        redirectTo: '/'
	      });
	  });
	  
})();