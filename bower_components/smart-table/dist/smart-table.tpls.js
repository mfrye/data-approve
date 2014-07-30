angular.module('quad.smart-table.templates').run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/batch-state.html',
    '<div class="batch-status"><div class="state-name">{{state}}</div><progressbar value="progress" max="6" type="{{barColor}}"></progressbar></div>');
}]);

angular.module('quad.smart-table.templates').run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/table.apply-action.html',
    '<div class="pull-left"><div ng-if="!applyActionsBtns" class="dropdown"><a class="dropdown-toggle btn btn-default">Apply Action <i class="fa fa-caret-down"></i></a><ul class="dropdown-menu"><li ng-repeat="a in applyActions"><a ng-click="action(a.action)">{{a.name}}</a></li></ul></div><ul ng-if="applyActionsBtns" class="mass-actions"><label>Mass Actions</label><li ng-repeat="a in applyActions"><button ng-click="action(a.action)" class="btn btn-primary">{{a.name}}</button></li></ul></div>');
}]);

angular.module('quad.smart-table.templates').run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/table.display-per-page.html',
    '<div class="table-top-paginate"><div class="pagination-indicator">{{label}} <span ng-if="displayedCollection.length !== 0">{{pageStartNumber}}-{{pageEndNumber}} of {{totalRows}}</span> <span ng-if="displayedCollection.length === 0">(no results)</span></div><div class="dropdown"><a class="dropdown-toggle btn btn-default"><i class="fa fa-caret-down"></i></a><ul class="dropdown-menu"><li><a>Display per page:</a></li><li ng-repeat="r in pageResults"><a x-name="option" ng-click="setDisplayPerPage(r.value)">{{r.text}}</a></li></ul></div><div pagination-smart-table="" num-pages="numberOfPages" max-size="3" current-page="currentPage" previous-text="<" next-text=">"></div></div>');
}]);

angular.module('quad.smart-table.templates').run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/table.filter.html',
    '<div class="table-filtering"><div class="filter-header"><h3>Filters</h3><button ng-click="clearAll()" ng-hide="filters.length === 0" class="btn btn-danger">Clear All</button></div><div><select ng-model="selectedFilter" ng-options="f.label for f in filterOptions | filter:filterSelected" class="form-control"><option value="">Select a filter</option></select></div><table-filter-input class="filter-input"></table-filter-input><div><ul class="list-unstyled"><li ng-repeat="f in filters | reverse" class="table-filter"><div class="input-group"><span class="input-group-addon">{{f.label}}</span> <span class="input-group-addon">{{f.val_label}}</span></div><button ng-click="removeFilter(f)" class="btn btn-danger"><i class="fa fa-times"></i></button></li></ul></div></div>');
}]);

angular.module('quad.smart-table.templates').run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/table.manage-action.html',
    '<div class="custom-table-cell"><div class="pull-right"><div ng-if="manageActions.length > 1" class="dropdown hug-left"><a class="dropdown-toggle btn btn-default"><span ng-show="manageActionsLabel">{{manageActionsLabel}}</span> <i class="fa fa-caret-down"></i></a><ul class="dropdown-menu"><li ng-repeat="a in manageActions"><a x-name="option" ng-click="action(a.action)">{{a.name}}</a></li></ul></div><div ng-if="manageActions.length === 1"><button ng-click="action(manageActions[0].action)" class="btn btn-default">{{manageActions[0].name}}</button></div></div></div>');
}]);

angular.module('quad.smart-table.templates').run(['$templateCache', function($templateCache) {
  $templateCache.put('partials/user-progress.html',
    '<div class="user-progress"><div ng-show="users.length > 0" class="users"><span ng-repeat="u in users"><span ng-class="{ \'text-success\': u.progress === numTasks, \'text-danger\': u.progress == 0, \'text-warning\': inProgress(u.progress) }">{{u.username}}<span ng-if="!inProgress(u.progress)">,</span> <span ng-if="inProgress(u.progress)">{{u.progress}}/{{numTasks}},</span></span></span></div><div ng-if="users.length === 0">-</div></div>');
}]);
