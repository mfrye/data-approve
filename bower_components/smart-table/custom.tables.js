var customTables = angular.module('custom.tables', [
	'smartTable.table',
	'custom.table.filters',
	//'table.services'
	'quad.smart-table.templates'
	]);

angular.module('quad.smart-table.templates', []);

// placeholder for base url of templates
customTables.value('STATIC_URL', '');

// TODO - add to dependencies
/*
  - UI Bootstrap plugins
  - Alert system
  - Outside service for table api calls
*/