angular.module("partials/pagination.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("partials/pagination.html",
    "<div class=\"pagination-wrapper\">\n" +
      "    <ul class=\"pagination\">\n" +
      "        <li ng-repeat=\"page in pages\" ng-class=\"{active: page.active, disabled: page.disabled}\"><a\n" +
      "                ng-click=\"selectPage(page.number)\">{{page.text}}</a></li>\n" +
      "    </ul>\n" +
      "</div> ");
}]);