angular.module('custom.table.filters', [])

.directive('tableFilters', [function() {
    return {
        restrict: 'E',
        scope: {
            filters: '=',
            config: '='
        },
        controller: 'tableFilterCtrl',
        templateUrl: 'partials/table.filter.html',
        link: function(scope, elm, attrs, ctrl) {

            // Filter constructor
            function Filter(config) {

                // short desc. in filter select
                this.label = config.label;

                // param key
                this.param = config.param;

                // param value
                this.param_val = null;

                // UX label of value when added
                this.val_label = null;

                // optionally add client side filter function if defined
                if (angular.isDefined(config.filterFunc)) {
                    this.filterFunc = config.filterFunc;
                }
            }

            // Add extra zero if needed
            function formatDate(date) {
                date = String(date);
                return date.length === 1 ? '0' + date : date;
            }

            // format date into yyyy-mm-dd
            function newDate(d) {
                return d.getFullYear() + '-' + formatDate(d.getMonth()) + '-' + formatDate(d.getDate());
            }

            function checkCurrentFilters(newFilter) {
                angular.forEach(scope.filters, function(filter) {
                    if (filter.template === newFilter.template) {
                        return true;
                    }
                });
                return false;
            }

            // Create and add filter
            scope.addFilter = function(filter, value) {
                var newFilter;

                if (scope.filterValue !== '') {
                    value = scope.filterValue;
                }

                if (value === '' || checkCurrentFilters(filter)) {
                    return;
                }

                // Create new filter from selected data
                newFilter = new Filter(filter);

                // Set value depending on type coming in
                if (filter.template === 'calender') {
                    newFilter.param_val = newDate(value);
                    newFilter.val_label = newFilter.param_val;
                }

                // typeahead inputs send whole object
                else if (filter.param === 'campaign') {
                    newFilter.param_val = value.uid;
                    newFilter.val_label = value.name;
                }

                else if (filter.param === 'group') {
                    newFilter.param_val = value.uid;
                    newFilter.val_label = value.group_name;
                }

                // Set string boolean to actual boolean
                else if (filter.options !== undefined) {
                    newFilter.param_val = value.value;
                    newFilter.val_label = value.label;
                }

                // Format into money
                else if (filter.template === 'money') {
                    //scope.companyCurrency = $companyCurrency.currencySymbol();
                    //newFilter.param_val = value;
                    //newFilter.val_label = scope.companyCurrency + '' + value + '.00';
                }

                // Default
                else {
                    newFilter.param_val = value;
                    newFilter.val_label = value;
                }

                // Add to filter and clear input
                scope.filters.push(newFilter);

                scope.selectedFilter = '';
            };

            scope.removeFilter = function(filter) {
                scope.filters = _.without(scope.filters, filter);
            };

            scope.clearAll = function() {
                scope.filters.length = 0;
            };

            // Not sure why this doesn't work right past 2
            // TODO: Rework this somehow
            scope.filterSelected = function(item) {
                if (scope.filters.length === 0) { return item; }
                else {
                    for (var i = 0, l = scope.filters.length; i < l; i++) {
                        if (item.param !== scope.filters[i].param) {
                            return item;
                        }
                    }
                }
            };


            // Initialize - set config
            if (scope.config !== undefined) {
                ctrl.setConfig(scope.config);
            }

        }
    };
}])

.directive('tableFilterInput', ['$compile', function($compile) {
    return {
        restrict: 'E',
        require: '^tableFilters',
        link: function(scope, elm, attrs, ctrl) {

            var currency = ''; //$companyCurrency.currencySymbol();
            var template,
            templates = {
                text: '<div class="input-group">' +
                '<input ng-model="filterValue" ng-enter="addFilter(selectedFilter, filterValue)" class="form-control" type="text">' +
                '<span class="input-group-btn">' +
                '<button ng-click="addFilter(selectedFilter, filterValue)" class="btn btn-default" type="button"><i class="fa fa-plus"></i></button>' +
                '</span>' +
                '</div>',

                money: '<div class="input-group input-money">' +
                '<span class="input-group-addon">' + currency + '</span>' +
                '<input ng-model="filterValue" ng-enter="addFilter(selectedFilter, filterValue)" type="text" class="form-control">' +
                '<span class="input-cents">.00</span>' +
                '<span class="input-group-btn">' +
                '<button ng-click="addFilter(selectedFilter, filterValue)" class="btn btn-default" type="button"><i class="fa fa-plus"></i></button>' +
                '</span>' +
                '</div>',

                select: '<select ng-model="filterValue" ng-options="o as o.label for o in activeFilter.options" ng-change="addFilter(selectedFilter, filterValue)" class="form-control"></select>',

                typeahead: '<div>' +
                '<input type="text" ng-model="filterValue" placeholder="Search {{activeFilter.param}}" typeahead="o as o[activeFilter.async.field] for o in typeaheadData | filter:{ {{activeFilter.async.field}}: $viewValue} | limitTo:10" typeahead-on-select="addFilter(selectedFilter, filterValue)" class="form-control">' +
                '</div>',

                typeaheadAsync: '<div class="async-loader">' +
                '<input type="text" ng-model="filterValue" placeholder="Search {{activeFilter.param}}" typeahead="o as o[activeFilter.async.field] for o in asyncSearch($viewValue) | filter:{ activeFilter.async.field: $viewValue} | limitTo:15" typeahead-loading="async.loadingResults" typeahead-wait-ms="async.asyncWaitTime" typeahead-on-select="addFilter(selectedFilter, filterValue)" class="form-control">' +

                '<i ng-show="async.loadingResults" class="fa fa-refresh fa-spin"></i>' +
                '</div>',

                calender: '<div class="input-group datepicker-input">' +
                '<input type="text" class="form-control" ng-change="addFilter(selectedFilter, filterValue)" datepicker-popup="yyyy-MM-dd" ng-model="filterValue" is-open="opened" close-text="Close" show-weeks="false" show-button-bar="false" />' +
                '<span class="input-group-btn">' +
                '<button class="btn btn-default" ng-click="open($event)"><i class="glyphicon glyphicon-calendar"></i></button>' +
                '</span>' +
                '</div>'
            };

            // Compile template and add to dom
            function compileInput (filterTemp) {
                if (filterTemp) {

                    // If typeahead template and data size is > 50 use async typeahead
                    // otherwise compile define template
                    if (filterTemp === 'typeahead' && scope.async.active) {
                        elm.html(templates.typeaheadAsync);
                    } else {
                        elm.html(templates[filterTemp]);
                    }
                } else {
                    elm.html('');
                }
                $compile(elm.contents())(scope);
            }

            // set active filter and show correct input template
            scope.$watch('selectedFilter', function(filter) {
                if (filter === '') {
                    compileInput();

                    // clear filter value
                    scope.filterValue = '';

                } else {
                    // Set active filter to selected filter
                    scope.activeFilter = filter;

                    if (filter.async !== undefined) {
                        ctrl.getData(filter);
                    }

                    // Compile template
                    compileInput(filter.template);
                }
            });

            // Listen to events from get data in controller
            scope.$on('update-input', function() {
                compileInput(scope.activeFilter.template);
            });

            // Open control for calender
            // TODO: bug when clicking on input to open
            scope.open = function($event) {
                $event.preventDefault();
                $event.stopPropagation();

                scope.opened = true;
            };
        }

    };
}])

.controller('tableFilterCtrl', ['$scope', '$q', function($scope, $q) {

    // Used for async search promise
    var abortSearch;

    $scope.selectedFilter = '';
    $scope.filterValue = '';

    $scope.async = {
        active: true,
        loadingResults: false,
        asyncWaitTime: 500
    };

    $scope.activeFilter = {};
    $scope.filterOptions = [];

    // Default filter select options
    var defaultFilterOptions = [
    // {
    //     label: 'created before date',
    //     param: 'created_at__lte',
    //     param_val: '',
    //     template: 'calender',
    //     filterFunc: function (item, filter) {
    //         return item.created_at < filter.param_val;
    //     }
    // },
    // {
    //     label: 'created after date',
    //     param: 'created_at__gte',
    //     param_val: '',
    //     template: 'calender',
    //     filterFunc: function (item, filter) {
    //         return item.created_at > filter.param_val;
    //     }
    // }
    ];


    this.setConfig = function(config) {

        // Set custom defined filters
        angular.forEach(config.filters, function(filter) {
            $scope.filterOptions.push(filter);
        });

        // Add default filters at the bottom
        angular.forEach(defaultFilterOptions, function(filter) {
            $scope.filterOptions.push(filter);
        });
    };

    this.getData = function(filter) {
        $v3API.all(filter.async.endpoint).getList({ page_size: 50 }).then(function(data) {

            // If data is less than 50 use normal typeahead
            // Otherwise use async typeahead
            if (data.count < 50) {
                $scope.async.active = false;
                $scope.typeaheadData = data;
            } else {
                $scope.async.active = true;
            }

            // Recompile input template if needed
            $scope.$broadcast('update-input');
        });
    };

    // Async loader for searching groups
    $scope.asyncSearch = function(value) {
        // Add a deferrer to cancel an ongoing request
        // if another request is made
        if (abortSearch) { abortSearch.resolve(); }
        abortSearch = $q.defer();

        $scope.async.loadingResults = true;

        return $v3API.all($scope.activeFilter.async.endpoint).withHttpConfig({timeout: abortSearch.promise}).getList({ search: value, ordering: $scope.activeFilter.async.field }).then(function(data) {

            $scope.async.loadingResults = false;
            return data;
        });
    };

}])

.filter('reverse', function() {
  return function(items) {
    return items.slice().reverse();
  };
});