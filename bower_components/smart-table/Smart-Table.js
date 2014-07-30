/* Column module */

(function (global, angular) {
    "use strict";
    var smartTableColumnModule = angular.module('smartTable.column', ['smartTable.templateUrlList']).constant('DefaultColumnConfiguration', {
        isSortable: true,
        isEditable: false,
        type: 'text',


        //it is useless to have that empty strings, but it reminds what is available
        headerTemplateUrl: '',
        map: '',
        label: '',
        sortPredicate: '',
        formatFunction: '',
        formatParameter: '',
        filterPredicate: '',
        cellTemplate: '',
        cellTemplateUrl: '',
        headerClass: '',
        cellClass: '',
        saving: false
    });

    function ColumnProvider(DefaultColumnConfiguration, templateUrlList) {

        function Column(config) {
            if (!(this instanceof Column)) {
                return new Column(config);
            }
            angular.extend(this, config);
        }

        this.setDefaultOption = function (option) {
            angular.extend(Column.prototype, option);
        };

        DefaultColumnConfiguration.headerTemplateUrl = templateUrlList.defaultHeader;
        this.setDefaultOption(DefaultColumnConfiguration);

        this.$get = function () {
            return Column;
        };
    }

    ColumnProvider.$inject = ['DefaultColumnConfiguration', 'templateUrlList'];
    smartTableColumnModule.provider('Column', ColumnProvider);

    //make it global so it can be tested
    global.ColumnProvider = ColumnProvider;
})(window, angular);



/* Directives */
(function (angular) {
    "use strict";

    // Custom
    // Added dependency on ui.bootstrap.position
    // enables use of $position service
    angular.module('smartTable.directives', ['smartTable.templateUrlList', 'smartTable.templates', 'ui.bootstrap.position'])
        .directive('smartTable', ['templateUrlList', 'DefaultTableConfiguration', function (templateList, defaultConfig) {
            return {
                restrict: 'EA',
                scope: {
                    dataSource: '=rows',
                    columnCollection: '=columns',
                    filters: '=',
                    config: '='
                },
                replace: 'true',
                templateUrl: templateList.smartTable,
                controller: 'TableCtrl',
                link: function (scope, element, attr, ctrl) {

                    var templateObject, newConfig;

                    // Set config for table based on injected config data
                    // TODO - break this up to make it easier to read
                    function setConfig() {
                        var newConfig = angular.extend({}, defaultConfig, scope.config),
                            length = scope.columns !== undefined ? scope.columns.length : 0;

                        // Add all defined config options to global scope - the controller
                        ctrl.setGlobalConfig(newConfig);

                        //remove the checkbox column if needed
                        if (newConfig.selectionMode !== 'multiple' || newConfig.displaySelectionCheckbox !== true) {
                            for (var i = length - 1; i >= 0; i--) {
                                if (scope.columns[i].isSelectionColumn === true) {
                                    ctrl.removeColumn(i);
                                }
                            }
                        } else {
                            //add selection box column if required
                            ctrl.insertColumn({
                                cellTemplateUrl: templateList.selectionCheckbox,
                                headerTemplateUrl: templateList.selectAllCheckbox,
                                isSelectionColumn: true,
                                cellClass: 'smart-table-checkbox-cell'
                            }, 0);
                        }

                        // Add manage actions buttons for each row
                        if (angular.isDefined(newConfig.manageActions) && newConfig.editDeleteBtns !== true && newConfig.manageBtns !== true) {
                            ctrl.insertColumn({
                                cellTemplate: '<manage-table-btn></manage-table-btn>'
                            }, scope.columns.length);
                        }

                        // Add delete buttons for each row
                        if (newConfig.editDeleteBtns === true) {
                            ctrl.insertColumn({
                                cellTemplate: '<table-edit-delete></table-edit-delete>'
                            }, scope.columns.length);
                        }

                        // Setup watch on table global search
                        if (angular.isDefined(scope.config.search)) {
                            scope.$watch('config.search', function(newVal, oldVal) {
                                if (newVal !== '' || (oldVal !== '' && newVal === '')) {
                                    ctrl.search(newVal);
                                }
                            }, true);
                        }

                        // start watch on dataCollection
                        // Update table on change
                        if (!newConfig.useServer) {
                            scope.$watch('dataSource.length', function (newValue, oldValue) {
                                if (oldValue !== newValue) {
                                    scope.dataCollection = scope.dataSource;
                                    //ctrl.setRowsLength();
                                    ctrl.sortBy();
                                }
                            });
                        }
                    }


                    // Add columns to table
                    if (scope.columnCollection) {
                        for (var i = 0, l = scope.columnCollection.length; i < l; i++) {
                            ctrl.insertColumn(scope.columnCollection[i]);
                        }
                    }

                    // if dataSource is defined then
                    // use for table and set config to use client vs server
                    // then in config start watch on dataCollection
                    scope.config.useServer = angular.isDefined(scope.dataSource) ? false : true;

                    // Get new data as filters are changed
                    // start watch if defined
                    if (angular.isDefined(scope.filters)) {
                        scope.$watch('filters.length', function(newValue, oldValue) {
                            if (newValue !== oldValue) {
                                ctrl.filterTable();
                            }
                        });
                    }

                    // Set configuration and add / remove selection checkbox if needed
                    setConfig();

                    // Initialize table and get data
                    ctrl.intialize();

                }
            };
        }])
        //just to be able to select the row
        .directive('smartTableDataRow', ['$compile', '$position', '$document', function ($compile, $position, $document) {

            return {
                require: '^smartTable',
                restrict: 'C',
                link: function (scope, element, attr, ctrl) {

                    // Custom
                    var template, templateCreated = false;

                    // Watch saving field on row
                    // If saving, create overlay element and show on table row
                    // When saving success, remove element
                    scope.$watch('dataRow.saving', function(saving) {
                        if (saving) {
                            // Set that template has been created
                            templateCreated = true;

                            // Get position from angular-ui $position service
                            scope.position = $position.offset(element);

                            // Create element and add to DOM
                            template = angular.element("<div class=\"table-row-saving\" ng-style=\"{width: position.width + 'px', height: position.height + 'px', left: position.left + 'px', top: position.top + 'px'}\"><div class='row-saving-inner'>Saving</div></div>");
                            $compile(template)(scope);
                            $document.find('body').append(template);

                        } else if(templateCreated) {
                            // On save success remove
                            template.remove();
                        }
                    });

                    var _config;
                    if ((_config = scope.config) != null) {
                        if (typeof _config.rowFunction === "function") {
                            _config.rowFunction(scope, element, attr, ctrl);
                        }
                    }

                    element.bind('click', function () {
                        scope.$apply(function () {
                            ctrl.toggleSelection(scope.dataRow);
                        })
                    });
                }
            };
        }])
        //header cell with sorting functionality or put a checkbox if this column is a selection column
        .directive('smartTableHeaderCell',function () {
            return {
                restrict: 'C',
                require: '^smartTable',
                link: function (scope, element, attr, ctrl) {
                    element.bind('click', function (event) {

                        // Don't call sort by when any input in header is clicked
                        // aka the checkbox for select all / the first cell in the table
                        if (event.target.nodeName !== 'INPUT' && event.target.cellIndex !== 0) {
                            scope.$apply(function () {
                                ctrl.sortBy(scope.column);
                            });
                        }
                    });
                }
            };
        }).directive('smartTableSelectAll', function () {
            return {
                restrict: 'C',
                require: '^smartTable',
                link: function (scope, element, attr, ctrl) {
                    element.bind('click', function (event) {
                        ctrl.toggleSelectionAll(element[0].checked === true);
                    });
                }
            };
        })
        //credit to Valentyn shybanov : http://stackoverflow.com/questions/14544741/angularjs-directive-to-stoppropagation
        .directive('stopEvent', function () {
            return {
                restrict: 'A',
                link: function (scope, element, attr) {
                    element.bind(attr.stopEvent, function (e) {
                        e.stopPropagation();
                    });
                }
            }
        })
        //the global filter
        .directive('smartTableGlobalSearch', ['templateUrlList', function (templateList) {
            return {
                restrict: 'C',
                require: '^smartTable',
                scope: {
                    columnSpan: '@'
                },
                templateUrl: templateList.smartTableGlobalSearch,
                replace: false,
                link: function (scope, element, attr, ctrl) {

                    scope.searchValue = '';

                    scope.$watch('searchValue', function (value) {
                        //todo perf improvement only filter on blur ?
                        if (value !== '') {
                            ctrl.search(value);
                        }
                    });
                }
            }
        }])
        .directive('tableApplyAction', [function () {
            return {
                restrict: 'C',
                templateUrl: 'partials/table.apply-action.html',
                require: '^smartTable',
                link: function (scope, element, attrs, ctrl) {
                    //can use , scope.column, scope.formatedValue, and ctrl API

                    // Get list of selected rows
                    function getSelected() {
                        var i,
                        l = scope.displayedCollection.length,
                        rowsSelected = [];

                        for (i = 0; i < l; i++) {
                            if (scope.displayedCollection[i].isSelected) {
                                rowsSelected.push(scope.displayedCollection[i]);
                            }
                        }

                        return rowsSelected;
                    }

                    // Click action from list
                    // Triggers action defined in contrller and passes data back
                    scope.action = function(action) {
                        var selected = getSelected();

                        if (selected.length > 0) {
                            // Trigger defined action in controller
                            // pass callback to toggle rows off on success
                            action(selected, function(tableAction) {
                                ctrl.toggleSelectionAll(false);

                                if (tableAction !== undefined) {
                                    if (tableAction === 'deleteRows') {
                                        ctrl[tableAction](selected);
                                    }
                                    else {
                                        ctrl[tableAction]();
                                    }
                                }
                            });
                        }
                    };
                }
            };
        }])

        // Toggle number of results to display per page
        .directive('displayPerPage', [function () {
            return {
                restrict: 'E',
                templateUrl: 'partials/table.display-per-page.html',
                require: '^smartTable',
                link: function (scope, element, attrs, ctrl) {

                    function capitaliseFirstLetter(string) {
                        return string.charAt(0).toUpperCase() + string.slice(1);
                    }
                    scope.$watch('apiEndpoint', function() {
                        if(angular.isDefined(scope.apiEndpoint)) {
                            scope.label = scope.paginateLabel || capitaliseFirstLetter(scope.apiEndpoint);
                        }
                    });
                    // Set label to show next to paginate

                    scope.pageResults = [
                    { text: '10 results', value: 10 },
                    { text: '25 results', value: 25 },
                    { text: '50 results', value: 50 },
                    { text: '100 results', value: 100 },
                    { text: '200 results', value: 200 },
                    { text: '250 results', value: 250 }
                    ];

                    // Update number to display per page
                    scope.setDisplayPerPage = function(value) {
                        scope.itemsByPage = value;
                        scope.currentPage = 1;

                        if(scope.useServer) {
                            ctrl.updateTable();
                        } else {
                            scope.displayedCollection = ctrl.pipe(scope.dataCollection);
                            ctrl.setPageDisplay();
                        }

                    };
                }
            };
        }])

        // Optional manage dropdown on right side of table
        .directive('manageTableBtn', [function () {
          return {
            restrict: 'E',
            templateUrl: 'partials/table.manage-action.html',
            require: '^smartTable',
            link: function (scope, element, attrs, ctrl) {
                //can use , scope.column, scope.formatedValue, and ctrl API

                var status = ["Zero Comm.", "Approved", "Denied" ];
                scope.statusText = status[parseInt(scope.dataRow.is_approved, 10)];

                // Click action from list
                // Triggers action defined in contrller and passes data back
                scope.action = function(action) {

                    // Can return tableAction in string format
                    action(scope.dataRow, function(tableAction) {
                        ctrl.updateTable();
                    });
                };

                scope.isZero = function(amount) {
                    return (parseFloat(amount) === 0);
                }
            }
          };
        }])

        // Optional edit/delete buttons on right side of table
        .directive('tableEditDelete', [function () {
          return {
            restrict: 'E',
            templateUrl: 'partials/table.manage.group.manage-action.html',
            require: '^smartTable',
            link: function (scope, element, attrs, ctrl) {
              //can use , scope.column, scope.formatedValue, and ctrl API

                // Click action from list
                // Triggers action defined in contrller and passes data back
                scope.action = function(action) {
                    action(scope.dataRow, function(tableAction) {
                        if (tableAction !== undefined) {
                            ctrl[tableAction](scope.dataRow);
                        }
                    });
                };
            }
          };
        }])

        //a customisable cell (see templateUrl) and editable
        //TODO check with the ng-include strategy
        .directive('smartTableDataCell', ['$filter', '$http', '$templateCache', '$compile', '$parse', function (filter, http, templateCache, compile, parse) {
            return {
                restrict: 'C',
                link: function (scope, element) {
                    var
                        column = scope.column,
                        isSimpleCell = !column.isEditable,
                        row = scope.dataRow,
                        format = filter('format'),
                        getter = parse(column.map),
                        childScope;

                    //can be useful for child directives
                    scope.$watch('dataRow', function (value) {
                        scope.formatedValue = format(getter(row), column.formatFunction, column.formatParameter);
                        if (isSimpleCell === true) {
                            element.text(scope.formatedValue);
                        }
                    }, true);

                    function defaultContent() {
                        if (column.isEditable) {
                            element.html('<div editable-cell="" row="dataRow" column="column" type="column.type"></div>');
                            compile(element.contents())(scope);
                        } else {
                            element.text(scope.formatedValue);
                        }
                    }

                    scope.$watchCollection('[column.cellTemplate, column.cellTemplateUrl]', function (oldValue, newValue) {

                        if (newValue[0]) {
                            isSimpleCell = false;

                            //create a scope
                            childScope = scope.$new();
                            //compile the element with its new content and new scope
                            element.html(newValue[0]);
                            compile(element.contents())(childScope);

                        } else if (newValue[1]) {
                            //we have to load the template (and cache it) : a kind of ngInclude
                            http.get(newValue[1], {cache: templateCache}).success(function (response) {

                                isSimpleCell = false;

                                //create a scope
                                childScope = scope.$new();
                                //compile the element with its new content and new scope
                                element.html(response);
                                compile(element.contents())(childScope);
                            }).error(defaultContent);

                        } else {
                            defaultContent();
                        }
                    });
                }
            };
        }])
        //directive that allows type to be bound in input
        .directive('inputType', function () {
            return {
                restrict: 'A',
                priority: 1,
                link: function (scope, ielement, iattr) {
                    //force the type to be set before inputDirective is called
                    var type = scope.$eval(iattr.type);
                    iattr.$set('type', type);
                }
            };
        })
        //an editable content in the context of a cell (see row, column)
        .directive('editableCell', ['templateUrlList', '$parse', function (templateList, parse) {
            return {
                restrict: 'EA',
                require: '^smartTable',
                templateUrl: templateList.editableCell,
                scope: {
                    row: '=',
                    column: '=',
                    type: '='
                },
                replace: true,
                link: function (scope, element, attrs, ctrl) {
                    var form = angular.element(element.children()[1]),
                        input = angular.element(form.children()[0]),
                        getter = parse(scope.column.map),
                        originalType;

                    //init values
                    scope.isEditMode = false;
                    scope.$watch('row', function () {
                        scope.value = getter(scope.row);
                    }, true);


                    scope.submit = function () {
                        //update model if valid
                        if (scope.myForm.$valid === true) {

                            // if original type was number - reset
                            if (originalType === 'number') {
                                scope.value = Number(scope.value);
                            }

                            ctrl.updateDataRow(scope.row, scope.column.map, scope.value);
                            ctrl.sortBy();//it will trigger the refresh...  (ie it will sort, filter, etc with the new value)
                        }
                        scope.toggleEditMode();
                    };

                    scope.toggleEditMode = function () {
                        scope.value = getter(scope.row);
                        scope.isEditMode = scope.isEditMode !== true;
                    };

                    scope.$watch('isEditMode', function (newValue) {
                        if (newValue === true) {
                            // store typeof to switch back after input
                            originalType = typeof scope.value;

                            input[0].select();
                            input[0].focus();
                        }
                    });

                    input.bind('blur', function () {
                        scope.$apply(function () {
                            scope.submit();
                        });
                    });
                }
            };
        }]);
})(angular);

/* Filters */
(function (angular) {
    "use strict";
    angular.module('smartTable.filters', []).
        constant('DefaultFilters', ['currency', 'date', 'json', 'lowercase', 'number', 'uppercase']).
        filter('format', ['$filter', 'DefaultFilters', function (filter, defaultfilters) {
            return function (value, formatFunction, filterParameter) {

                var returnFunction;

                if (formatFunction && angular.isFunction(formatFunction)) {
                    returnFunction = formatFunction;
                } else {
                    returnFunction = defaultfilters.indexOf(formatFunction) !== -1 ? filter(formatFunction) : function (value) {
                        return value;
                    };
                }
                return returnFunction(value, filterParameter);
            };
        }]);
})(angular);


/*table module */

(function (angular) {
    "use strict";
    angular.module('smartTable.table', ['smartTable.column', 'smartTable.utilities', 'smartTable.directives', 'smartTable.filters', 'ui.bootstrap.pagination.smartTable', 'alertSystem'])
        .constant('DefaultTableConfiguration', {
            selectionMode: 'none',
            isGlobalSearchActivated: false,
            displaySelectionCheckbox: false,
            isPaginationEnabled: true,
            isTopPaginationEnabled: false,
            itemsByPage: 10,
            maxSize: 5,

            // Fill table with dynamic data from server
            apiEndpoint: '',
            tableClass: '',
            defaultParams: {},
            applyActionsBtns: false,

            //just to remind available option
            sortAlgorithm: '',
            filterAlgorithm: ''
        })
        .controller('TableCtrl', ['$scope', 'Column', '$filter', '$parse', 'ArrayUtility', 'DefaultTableConfiguration', '$alert', '$timeout', function (scope, Column, filter, parse, arrayUtility, defaultConfig, $alert, $timeout) {

            scope.columns = [];
            scope.dataCollection = scope.dataSource || [];
            scope.displayedCollection = []; //init empty array so that if pagination is enabled, it does not spoil performances
            scope.numberOfPages = 0;
            scope.currentPage = 1;
            scope.holder = {isAllSelected: false};
            scope.useServer = false;

            var predicate = {},
                lastColumnSort,
                search,
                self = this;

            function isAllSelected() {
                var i,
                    l = scope.displayedCollection.length;
                for (i = 0; i < l; i++) {
                    if (scope.displayedCollection[i].isSelected !== true) {
                        return false;
                    }
                }
                return true;
            }

            function sortDataRow(array, column) {
                var sortAlgo = (scope.sortAlgorithm && angular.isFunction(scope.sortAlgorithm)) === true ? scope.sortAlgorithm : filter('orderBy');
                if (column) {
                    return arrayUtility.sort(array, sortAlgo, column.sortPredicate, column.reverse);
                } else {
                    return array;
                }
            }

            function selectDataRow(array, selectionMode, index, select) {
                var dataRow, oldValue;

                if ((!angular.isArray(array)) || (selectionMode !== 'multiple' && selectionMode !== 'single')) {
                    return;
                }

                if (index >= 0 && index < array.length) {
                    dataRow = array[index];
                    if (selectionMode === 'single') {
                        //unselect all the others
                        for (var i = 0, l = array.length; i < l; i++) {
                            oldValue = array[i].isSelected;
                            array[i].isSelected = false;
                            if (oldValue === true) {
                                scope.$emit('selectionChange', {item: array[i]});
                            }
                        }
                    }
                    dataRow.isSelected = select;
                    scope.holder.isAllSelected = isAllSelected();
                    scope.$emit('selectionChange', {item: dataRow});
                }
            }

            // If reverse is true, add formatting for server
            function setOrdering(column) {
                if (column.reverse) {
                    return '-' + column.sortPredicate;
                }
                return column.sortPredicate;
            }

            // Format filters to be added to http params
            function parseFilters(filtersArray) {
                var filters = {};

                if (!angular.isDefined(filtersArray) || filtersArray.length === 0) {
                    return filters;
                }

                filtersArray.forEach(function(filter) {
                    filters[filter.param] = filter.param_val;
                });

                return filters;
            }

            /* Take data from server and update table
               - Set data to show
               - Update pages display area
            */
            function filterTableServer(data) {
                scope.displayedCollection = data;

                scope.totalRows = data.count;
                self.calculateNumberOfPages(scope.totalRows);
                self.setPageDisplay();
            }

            // Use server for filtering
            function useServer() {
                self.getData().then(function(data) {
                    filterTableServer(data);
                });
            }

            // Make sure every filter being added has a function defined for it
            // if not then default to server search
            function checkFilterFuncs() {
                for (var i = 0, l = scope.filters.length; i < l; i++) {
                    if (scope.filters[i].filterFunc === undefined) {
                        return true;
                    }
                }
                return false;
            }


            /*
              Exposed functions - API
              -----------------------
            */

            this.setRowsLength = function() {
                scope.totalRows = scope.dataCollection.length;
            };

			scope.$on("EXPORT_COLLECTION", function(event){
                scope.tableData.displayedCollection = scope.displayedCollection;
            });

            scope.$on("UPDATE_TABLE", function(event) {
                self.sortBy();
                //self.updateTable();
            });

            // Use total number of items from server
            this.calculateNumberOfPages = function (total) {
                scope.numberOfPages = (total === 0 || scope.itemsByPage < 1 ? 1 : Math.ceil(total / scope.itemsByPage));
            };

            // Show current page items -> 1-10 of total
            this.setPageDisplay = function () {
                var rowsShowing = scope.itemsByPage;

                scope.pageStartNumber = ((scope.currentPage - 1) * rowsShowing) + 1;
                scope.pageEndNumber = (scope.currentPage - 1) * rowsShowing + scope.displayedCollection.length;
            };

            /**
             * set the config (config parameters will be available through scope
             * @param config
             */
            this.setGlobalConfig = function (config) {
                angular.extend(scope, defaultConfig, config);
            };

            /**
             * change the current page displayed
             * @param page
             */
            this.changePage = function (page) {
                var oldPage = scope.currentPage;
                if (angular.isNumber(page.page)) {
                    scope.currentPage = page.page;

                    // Update page from server
                    if (scope.useServer) {
                        this.getData().then(function (data) {
                            filterTableServer(data);
                        });

                    }
                    // Update page from client
                    else {
                        scope.displayedCollection = this.pipe(scope.dataCollection);
                        scope.holder.isAllSelected = isAllSelected();
                        this.setPageDisplay();
                        scope.$emit('changePage', {oldValue: oldPage, newValue: scope.currentPage});
                    }
                }
            };


            /**
             * set column as the column used to sort the data (if it is already the case, it will change the reverse value)
             * @method sortBy
             * @param column
             */
            this.sortBy = function (column) {
                var index = scope.columns.indexOf(column);

                if (index !== -1) {
                    if (column.isSortable === true) {
                        // reset the last column used
                        if (lastColumnSort && lastColumnSort !== column) {
                            lastColumnSort.reverse = 'none';
                        }

                        column.sortPredicate = column.sortPredicate || column.map;
                        column.reverse = column.reverse !== true;
                        lastColumnSort = column;
                    }
                }

                if (scope.useServer) {
                    this.getData(column).then(function(data) {
                        filterTableServer(data);
                    });

                } else {
                    scope.displayedCollection = this.pipe(scope.dataCollection);
                    this.setPageDisplay();
                }
            };

            this.sortByNonColumn = function (params) {

                lastColumnSort = params;

                if (scope.useServer) {
                    this.getData(params).then(function(data) {
                        filterTableServer(data);
                    });

                } else {
                    scope.displayedCollection = this.pipe(scope.dataCollection);
                    this.setPageDisplay();
                }
            };

            /**
             * set the filter predicate used for searching
             * @param input
             * @param column
             */
            this.search = function (input, column) {

                //update column and global predicate
                if (column && scope.columns.indexOf(column) !== -1) {
                    predicate[column.map] = input;
                } else {
                    predicate = {$: input};
                }

                // Server search
                if (scope.useServer) {

                    if (search !== undefined) {
                        $timeout.cancel(search);
                    }

                    // Trigger call to get data
                    // search input already referenced in getData function
                    search = $timeout(function() {
                        self.getData().then(function(data) {
                            filterTableServer(data);
                        });
                    }, 1500);
                }

                // Client side search
                else {
                    scope.displayedCollection = this.pipe(scope.dataCollection);
                }
            };

            /**
             * combine sort, search and limitTo operations on an array,
             * @param array
             * @returns Array, an array result of the operations on input array
             */
            this.pipe = function (array) {
                var filterAlgo = (scope.filterAlgorithm && angular.isFunction(scope.filterAlgorithm)) === true ? scope.filterAlgorithm : filter('filter'),
                    output;

                //filter and sort are commutative
                // filter and sort get saved
                output = sortDataRow(arrayUtility.filter(array, filterAlgo, predicate), lastColumnSort);

                // If client side filtering, set totalRows to filtered output length
                if (!scope.useServer) {
                    scope.totalRows = output.length;
                }

                // Calculate number of pages based on count from server
                this.calculateNumberOfPages(scope.totalRows);

                return scope.isPaginationEnabled ? arrayUtility.fromTo(output, (scope.currentPage - 1) * scope.itemsByPage, scope.itemsByPage) : output;
            };

            this.updateTable = function() {
                this.getData().then(function(data) {
                    filterTableServer(data);
                });
            };

            this.filterTable = function() {
                // Server filtering
                // If not all of the chosen filters have a client function defined
                // then default to using the server
                if (scope.useServer || checkFilterFuncs()) {
                    useServer();
                }

                // Client side filtering
                else if (scope.filters.length > 0) {

                    // Set filter algo to filters defined in UI
                    scope.filterAlgorithm = function(arrayRef, expression) {
                        // Iterate through filters
                        var filtered = arrayRef;

                        // Switch to lazy.js?
                        angular.forEach(scope.filters, function(filter) {
                            filtered = filtered.filter(function(item) {
                                // Call defined function on filter
                                return filter.filterFunc(item, filter);
                            });
                        });

                        return filtered;
                    }
                } else {
                    scope.filterAlgorithm = null;
                }

                scope.displayedCollection = this.pipe(scope.dataCollection);
                this.setPageDisplay();
            };

            // TODO: Clean this up
            /* Currently pass in:
             - defaultParams from config
             - search field if it's defined
             - filters if defined
             - the current page / items per page
            */
            this.getData = function (column) {
                var searchConfig = {},
                filters = parseFilters(scope.filters),
                search = (scope.config.search === undefined || scope.config.search === '') ? {} : { search: scope.config.search };

                // when items are deleted and we need to go back one page
                if ((scope.currentPage - 1) * scope.itemsByPage >= scope.dataCollection.length) {
                    scope.currentPage--;
                }

                angular.extend(searchConfig, scope.defaultParams, search, filters, {
                    page: scope.currentPage,
                    page_size: scope.itemsByPage
                });

                if (lastColumnSort !== undefined) {
                    searchConfig.ordering = setOrdering(lastColumnSort);
                } else if (column !== undefined) {
                    searchConfig.ordering = setOrdering(column);
                }

                // Set endpoint dynamically
                return QuadAPI.all(scope.apiEndpoint).getList( searchConfig );
            };

            // Get data from defined endpoint
            // set to filter data client or server side
            this.intialize = function() {
                var searchConfig = {};
                if (angular.isDefined(scope.startingOrder)) {
                    searchConfig.ordering = scope.startingOrder;
                }

                if (scope.useServer) {

                    angular.extend(searchConfig, scope.defaultParams, {
                        page: 1,
                        page_size: 100
                    });

                    // Set endpoint dynamically
                    QuadAPI.all(scope.apiEndpoint).getList( searchConfig ).then(function (data) {
                        scope.totalRows = data.count;

                        // If data size is too large
                        // switch to getting all data from the server
                        if (scope.totalRows > 100) {
                            scope.useServer = true;
                        }

                        scope.dataCollection = data;
                        scope.displayedCollection = self.pipe(data);
                        self.setPageDisplay();
                    });
                } else {
                    this.sortBy();
                    this.setPageDisplay();
                }
            };


            /*////////////
             Column API
             ///////////*/


            /**
             * insert a new column in scope.collection at index or push at the end if no index
             * @param columnConfig column configuration used to instantiate the new Column
             * @param index where to insert the column (at the end if not specified)
             */
            this.insertColumn = function (columnConfig, index) {
                var column = new Column(columnConfig);
                arrayUtility.insertAt(scope.columns, index, column);
            };

            /**
             * remove the column at columnIndex from scope.columns
             * @param columnIndex index of the column to be removed
             */
            this.removeColumn = function (columnIndex) {
                arrayUtility.removeAt(scope.columns, columnIndex);
            };

            /**
             * move column located at oldIndex to the newIndex in scope.columns
             * @param oldIndex index of the column before it is moved
             * @param newIndex index of the column after the column is moved
             */
            this.moveColumn = function (oldIndex, newIndex) {
                arrayUtility.moveAt(scope.columns, oldIndex, newIndex);
            };

            /**
             * remove all columns
             */
            this.clearColumns = function () {
                scope.columns.length = 0;
            };

            /*///////////
             ROW API
             */

            /**
             * select or unselect the item of the displayedCollection with the selection mode set in the scope
             * @param dataRow
             */
            this.toggleSelection = function (dataRow) {
                var index = scope.dataCollection.indexOf(dataRow);
                if (index !== -1) {
                    selectDataRow(scope.dataCollection, scope.selectionMode, index, dataRow.isSelected !== true);
                }
            };

            /**
             * select/unselect all the currently displayed rows
             * @param value if true select, else unselect
             */
            this.toggleSelectionAll = function (value) {
                var i = 0,
                    l = scope.displayedCollection.length;

                if (scope.selectionMode !== 'multiple') {
                    return;
                }
                for (; i < l; i++) {
                    selectDataRow(scope.displayedCollection, scope.selectionMode, i, value === true);
                }
            };

            /**
             * remove the item at index rowIndex from the displayed collection
             * @param rowIndex
             * @returns {*} item just removed or undefined
             */
            this.removeDataRow = function (rowIndex) {
                var toRemove = arrayUtility.removeAt(scope.displayedCollection, rowIndex);
                arrayUtility.removeAt(scope.dataCollection, scope.dataCollection.indexOf(toRemove));
            };

            /**
             * move an item from oldIndex to newIndex in displayedCollection
             * @param oldIndex
             * @param newIndex
             */
            this.moveDataRow = function (oldIndex, newIndex) {
                arrayUtility.moveAt(scope.displayedCollection, oldIndex, newIndex);
            };

            /**
             * update the model, it can be a non existing yet property
             * @param dataRow the dataRow to update
             * @param propertyName the property on the dataRow ojbect to update
             * @param newValue the value to set
             */
            this.updateDataRow = function (dataRow, propertyName, newValue) {
                var index = scope.displayedCollection.indexOf(dataRow),
                    getter = parse(propertyName),
                    setter = getter.assign,
                    oldValue;
                if (index !== -1) {
                    oldValue = getter(scope.displayedCollection[index]);
                    if (oldValue !== newValue) {
                        setter(scope.displayedCollection[index], newValue);
                        scope.$emit('updateDataRow', {item: scope.displayedCollection[index]});
                    }
                }
            };

            // Custom Methods
            // ============================

            /**
             * Make copy of dataRow before editing - to compare changes when saving
             * @param dataRow the dataRow to update
             * @returns copied dataRow
            */
            this.makeCopy = function(dataRow) {
                return QuadAPI.copy(dataRow);
            };

            /**
             * Call v3 API to save if data has changed
             * @param original the original object
             * @param changed the changed object to compare to
            */
            this.saveRow = function(original, changed) {

                // Get changed values
                var toSave = $helper.diff(original, changed);

                // Save changes, then update original
                if (toSave !== false) {
                    // show saving overlay
                    original.saving = true;

                    // Call server to save
                    QuadAPI.one('marketing', original.uid).patch(toSave).then(function(data) {

                        // update all fields
                        for (var key in toSave) {
                            self.updateDataRow(original, key, toSave[key]);
                        }

                        // Hide overlay
                        original.saving = false;
                    });
                }
            };

            /*
             * Delete data from v3API and remove from dataCollection
             * @param dataRow the dataRow/file to delete
            */
            this.deleteRow = function(dataRow) {
                dataRow.remove().then(function(data) {
                    var index = scope.displayedCollection.indexOf(dataRow);
                    self.removeDataRow(index);
                    self.updateTable();
                });
            };

            this.deleteRows = function(dataRows) {
                var count = dataRows.length;
                angular.forEach(dataRows, function(dataRow) {
                    dataRow.remove().then(function(data) {
                        var index = scope.displayedCollection.indexOf(dataRow);
                        self.removeDataRow(index);
                        --count;
                        if (count === 0) { self.updateTable(); }
                    });
                });
            };

        }]);
})(angular);



angular.module('smartTable.templates', ['partials/defaultCell.html', 'partials/defaultHeader.html', 'partials/editableCell.html', 'partials/globalSearchCell.html', 'partials/pagination.html', 'partials/selectAllCheckbox.html', 'partials/selectionCheckbox.html', 'partials/smartTable.html']);

angular.module("partials/defaultCell.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("partials/defaultCell.html",
    "{{formatedValue}}");
}]);

angular.module("partials/defaultHeader.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("partials/defaultHeader.html",
    "<span class=\"header-content\" ng-class=\"{'sort-ascent':column.reverse==true,'sort-descent':column.reverse==false}\">{{column.label}}</span>");
}]);

angular.module("partials/editableCell.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("partials/editableCell.html",
    "<div ng-dblclick=\"toggleEditMode($event)\">\n" +
    "    <span ng-hide=\"isEditMode\">{{value | format:column.formatFunction:column.formatParameter}}</span>\n" +
    "\n" +
    "    <form ng-submit=\"submit()\" ng-show=\"isEditMode\" name=\"myForm\">\n" +
    "        <input name=\"myInput\" ng-model=\"value\" type=\"type\" input-type/>\n" +
    "    </form>\n" +
    "</div>");
}]);

angular.module("partials/globalSearchCell.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("partials/globalSearchCell.html",
    "<label>Search :</label>\n" +
    "<input type=\"text\" ng-model=\"searchValue\"/>");
}]);

angular.module("partials/pagination.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("partials/pagination.html",
    "<div class=\"pagination\">\n" +
    "    <ul>\n" +
    "        <li ng-repeat=\"page in pages\" ng-class=\"{active: page.active, disabled: page.disabled}\"><a\n" +
    "                ng-click=\"selectPage(page.number)\">{{page.text}}</a></li>\n" +
    "    </ul>\n" +
    "</div> ");
}]);

angular.module("partials/selectAllCheckbox.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("partials/selectAllCheckbox.html",
    "<input class=\"smart-table-select-all\"  type=\"checkbox\" ng-model=\"holder.isAllSelected\"/>");
}]);

angular.module("partials/selectionCheckbox.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("partials/selectionCheckbox.html",
    "<input type=\"checkbox\" ng-model=\"dataRow.isSelected\" stop-event=\"click\"/>");
}]);

angular.module("partials/smartTable.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("partials/smartTable.html",
    "<div class=\"\">\n" +
    "    <div class=\"clearfix smart-table-header\">\n" +
    "       <div ng-if=\"displaySelectionCheckbox\" class=\"pull-left\">\n" +
    "           <div class=\"table-apply-action\"></div>\n" +
    "       </div>\n" +
    "       <div class=\"pull-right\">\n" +
    "           <display-per-page></display-per-page>\n" +
    "       </div>\n" +
    "    </div>\n" +
    "    <div class=\"smart-table-wrapper\">\n" +
    "       <table class=\"smart-table table table-striped\" ng-class=\"tableClass\">\n" +
    "           <thead>\n" +
    "               <tr class=\"smart-table-global-search-row\" ng-if=\"isGlobalSearchActivated\">\n" +
    "                   <td class=\"smart-table-global-search\" column-span=\"{{columns.length}}\" colspan=\"{{columnSpan}}\">\n" +
    "                   </td>\n" +
    "               </tr>\n" +
    "               <tr class='smart-table-payout-headers' ng-if=\"displayColumnHighlights\">" +
    "                   <td colspan=2></td> \n" +
    "                   <td colspan=3><div><div class='highlight money'>Money</div></div></td>\n" +
    "                   <td colspan=3><div><div class='highlight points'>{{company.point_name}}</div></div></td>\n" +
    "                   <td colspan=2>\n" +
    "               </tr>\n" +
    "               <tr class=\"smart-table-header-row\">\n" +
    "                   <th ng-repeat=\"column in columns\" ng-include=\"column.headerTemplateUrl\"\n" +
    "                       class=\"smart-table-header-cell {{column.headerClass}}\" scope=\"col\">\n" +
    "                   </th>\n" +
    "               </tr>\n" +
    "           </thead>\n" +
    "           <tbody>\n" +
    "               <tr ng-repeat=\"dataRow in displayedCollection\" ng-class=\"{selected:dataRow.isSelected}\"\n" +
    "                   class=\"smart-table-data-row\">\n" +
    "                   <td ng-repeat=\"column in columns\" class=\"smart-table-data-cell {{column.cellClass}}\"></td>\n" +
    "               </tr>\n" +
    "           </tbody>\n" +
    "           <tfoot ng-show=\"isPaginationEnabled\">\n" +
    "               <tr class=\"smart-table-footer-row\">\n" +
    "               </tr>\n" +
    "           </tfoot>\n" +
    "       </table>\n" +
    "    </div>\n" +
    "    <div class=\"smart-table-footer\">\n" +
    "       <div pagination-smart-table=\"\" num-pages=\"numberOfPages\" max-size=\"maxSize\" current-page=\"currentPage\" previous-text=\"<\" next-text=\">\"></div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "");
}]);

(function (angular) {
    "use strict";
    angular.module('smartTable.templateUrlList', [])
        .constant('templateUrlList', {
            smartTable: 'partials/smartTable.html',
            smartTableGlobalSearch: 'partials/globalSearchCell.html',
            editableCell: 'partials/editableCell.html',
            selectionCheckbox: 'partials/selectionCheckbox.html',
            selectAllCheckbox: 'partials/selectAllCheckbox.html',
            defaultHeader: 'partials/defaultHeader.html',
            pagination: 'partials/pagination.html'
        });
})(angular);


(function (angular) {
    "use strict";
    angular.module('smartTable.utilities', [])

        .factory('ArrayUtility', function () {

            /**
             * remove the item at index from arrayRef and return the removed item
             * @param arrayRef
             * @param index
             * @returns {*}
             */
            var removeAt = function (arrayRef, index) {
                    if (index >= 0 && index < arrayRef.length) {
                        return arrayRef.splice(index, 1)[0];
                    }
                },

                /**
                 * insert item in arrayRef at index or a the end if index is wrong
                 * @param arrayRef
                 * @param index
                 * @param item
                 */
                insertAt = function (arrayRef, index, item) {
                    if (index >= 0 && index < arrayRef.length) {
                        arrayRef.splice(index, 0, item);
                    } else {
                        arrayRef.push(item);
                    }
                },

                /**
                 * move the item at oldIndex to newIndex in arrayRef
                 * @param arrayRef
                 * @param oldIndex
                 * @param newIndex
                 */
                moveAt = function (arrayRef, oldIndex, newIndex) {
                    var elementToMove;
                    if (oldIndex >= 0 && oldIndex < arrayRef.length && newIndex >= 0 && newIndex < arrayRef.length) {
                        elementToMove = arrayRef.splice(oldIndex, 1)[0];
                        arrayRef.splice(newIndex, 0, elementToMove);
                    }
                },

                /**
                 * sort arrayRef according to sortAlgorithm following predicate and reverse
                 * @param arrayRef
                 * @param sortAlgorithm
                 * @param predicate
                 * @param reverse
                 * @returns {*}
                 */
                sort = function (arrayRef, sortAlgorithm, predicate, reverse) {

                    if (!sortAlgorithm || !angular.isFunction(sortAlgorithm)) {
                        return arrayRef;
                    } else {
                        return sortAlgorithm(arrayRef, predicate, reverse === true);//excpet if reverse is true it will take it as false
                    }
                },

                /**
                 * filter arrayRef according with filterAlgorithm and predicate
                 * @param arrayRef
                 * @param filterAlgorithm
                 * @param predicate
                 * @returns {*}
                 */
                filter = function (arrayRef, filterAlgorithm, predicate) {
                    if (!filterAlgorithm || !angular.isFunction(filterAlgorithm)) {
                        return arrayRef;
                    } else {
                        return filterAlgorithm(arrayRef, predicate);
                    }
                },

                /**
                 * return an array, part of array ref starting at min and the size of length
                 * @param arrayRef
                 * @param min
                 * @param length
                 * @returns {*}
                 */
                fromTo = function (arrayRef, min, length) {

                    var out = [],
                        limit,
                        start;

                    if (!angular.isArray(arrayRef)) {
                        return arrayRef;
                    }

                    start = Math.max(min, 0);
                    start = Math.min(start, (arrayRef.length - 1) > 0 ? arrayRef.length - 1 : 0);

                    length = Math.max(0, length);
                    limit = Math.min(start + length, arrayRef.length);

                    for (var i = start; i < limit; i++) {
                        out.push(arrayRef[i]);
                    }
                    return out;
                };


            return {
                removeAt: removeAt,
                insertAt: insertAt,
                moveAt: moveAt,
                sort: sort,
                filter: filter,
                fromTo: fromTo
            };
        });
})(angular);



(function (angular) {
    angular.module('ui.bootstrap.pagination.smartTable', ['smartTable.templateUrlList'])

        .constant('paginationConfig', {
            boundaryLinks: false,
            directionLinks: true,
            firstText: 'First',
            previousText: '<',
            nextText: '>',
            lastText: 'Last'
        })

        .directive('paginationSmartTable', ['paginationConfig', 'templateUrlList', function (paginationConfig, templateUrlList) {
            return {
                restrict: 'EA',
                require: '^smartTable',
                scope: {
                    numPages: '=',
                    currentPage: '=',
                    maxSize: '='
                },
                templateUrl: templateUrlList.pagination,
                replace: true,
                link: function (scope, element, attrs, ctrl) {

                    // Setup configuration parameters
                    var boundaryLinks = angular.isDefined(attrs.boundaryLinks) ? scope.$eval(attrs.boundaryLinks) : paginationConfig.boundaryLinks;
                    var directionLinks = angular.isDefined(attrs.directionLinks) ? scope.$eval(attrs.directionLinks) : paginationConfig.directionLinks;
                    var firstText = angular.isDefined(attrs.firstText) ? attrs.firstText : paginationConfig.firstText;
                    var previousText = angular.isDefined(attrs.previousText) ? attrs.previousText : paginationConfig.previousText;
                    var nextText = angular.isDefined(attrs.nextText) ? attrs.nextText : paginationConfig.nextText;
                    var lastText = angular.isDefined(attrs.lastText) ? attrs.lastText : paginationConfig.lastText;

                    // Create page object used in template
                    function makePage(number, text, isActive, isDisabled) {
                        return {
                            number: number,
                            text: text,
                            active: isActive,
                            disabled: isDisabled
                        };
                    }

                    scope.$watch('numPages + currentPage + maxSize', function () {
                        scope.pages = [];

                        // Default page limits
                        var startPage = 1, endPage = scope.numPages;

                        // recompute if maxSize
                        if (scope.maxSize && scope.maxSize < scope.numPages) {
                            startPage = Math.max(scope.currentPage - Math.floor(scope.maxSize / 2), 1);
                            endPage = startPage + scope.maxSize - 1;

                            // Adjust if limit is exceeded
                            if (endPage > scope.numPages) {
                                endPage = scope.numPages;
                                startPage = endPage - scope.maxSize + 1;
                            }
                        }

                        // Add page number links
                        for (var number = startPage; number <= endPage; number++) {
                            var page = makePage(number, number, scope.isActive(number), false);
                            scope.pages.push(page);
                        }

                        // Add previous & next links
                        if (directionLinks) {
                            var previousPage = makePage(scope.currentPage - 1, previousText, false, scope.noPrevious());
                            scope.pages.unshift(previousPage);

                            var nextPage = makePage(scope.currentPage + 1, nextText, false, scope.noNext());
                            scope.pages.push(nextPage);
                        }

                        // Add first & last links
                        if (boundaryLinks) {
                            var firstPage = makePage(1, firstText, false, scope.noPrevious());
                            scope.pages.unshift(firstPage);

                            var lastPage = makePage(scope.numPages, lastText, false, scope.noNext());
                            scope.pages.push(lastPage);
                        }


                        if (scope.currentPage > scope.numPages) {
                            scope.selectPage(scope.numPages);
                        }
                    });
                    scope.noPrevious = function () {
                        return scope.currentPage === 1;
                    };
                    scope.noNext = function () {
                        return scope.currentPage === scope.numPages;
                    };
                    scope.isActive = function (page) {
                        return scope.currentPage === page;
                    };

                    scope.selectPage = function (page) {
                        if (!scope.isActive(page) && page > 0 && page <= scope.numPages) {
                            scope.currentPage = page;
                            ctrl.changePage({ page: page });
                        }
                    };
                }
            };
        }]);
})(angular);

