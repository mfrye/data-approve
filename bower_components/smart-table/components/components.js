
// Custom table cell components
customTables
.directive('batchState', ['utils', function(utils) {
  return {
    restrict: 'E',
    templateUrl: 'partials/batch-state.html',
    scope: {
      state: '='
    },
    require: '^smartTable',
    link: function (scope, element, attrs, ctrl) {

      scope.$watch('state', function() {

        // current progress of batch based on state name
        scope.progress = utils.getBatchStatus(scope.state);

        // show green bar if state is past in-progress
        scope.barColor = scope.progress > 3 ? 'success' : 'primary';
      });
    }
  };
}])

.directive('userProgress', ['utils', function(utils) {
  return {
    restrict: 'E',
    templateUrl: 'partials/user-progress.html',
    require: '^smartTable',
    scope: {
      state: '=',
      users: '=',
      numTasks: '='
    },
    link: function (scope, element, attrs, ctrl) {

      scope.$watch('users', function() {
        // current progress of batch based on state name
        scope.progress = utils.getBatchStatus(scope.state);

        // show green bar if user has completed all tasks
        scope.getUserProgress = function(userProgress) {      
          return userProgress === scope.numTasks ? 'success' : 'primary';
        };
      }, true);

      scope.inProgress = function(userProgress) {
        return userProgress > 0 && userProgress !== scope.numTasks;
      }
    }
  };
}])