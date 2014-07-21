(function() {
  'use strict';

angular.module('tools.components', [])

.directive('comparedValues', ['utils', function(utils) {
  return {
    scope: {
      place: '=',
      key: '=',
      provider: '='
    },
    restrict: 'EA',
    template: '<span><label>{{key}}</label>: {{value}}</span>',
    link: function(scope, elm, attrs) {

      scope.value = utils.getPropByString(scope.place, scope.key, scope.provider);

      console.log(scope.place);

      console.log(scope.key);
      console.log(scope.value);
    }
  }

}])

.filter('percentage', ['$filter', function($filter) {
    return function(input, decimals) {
        return $filter('number')(input*100, decimals)+'%';
    };
}]);

})();