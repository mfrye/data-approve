(function(){
  'use strict';

  angular.module('data-approve-main',['ngRoute'])
    .config(function ($routeProvider) {
      console.log('hello');
      $routeProvider
        .when('/', {
          templateUrl: 'main/main.html',
          controller: 'MainCtrl'
        });
    })

    .controller('MainCtrl', ['$scope', 'dealerAPI', function ($scope, dealerAPI) {

      $scope.state = null;

      $scope.getDealers = function() {

        if ($scope.state) {
          dealerAPI.getInfo($scope.state)
          .success(function(data) {
            console.log(data);
            $scope.dealers = data;
          })
          .error(function(data) {
            console.log(data);
          });
        }
      };

    }]);

})();