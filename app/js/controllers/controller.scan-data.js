
(function() {
  angular.module('tools.controllers')

  .controller('SetGeocodeCtrl',  [ '$scope', 'placeAPI', function($scope, placeAPI) {

    $scope.setGeocode = function() {
      placeAPI.setGeocode()
      .success(function(data) {

      });
    };
  }])

  .controller('ShortnamesCtrl',  [ '$scope', 'placeAPI', function($scope, placeAPI) {

    $scope.newWord = {
      group_one: {},
      group_two: {}
    };

    $scope.shortNameConfig = {
      removeCompany: true,
      group_one: [],
      group_two: []
    };

    $scope.loading = {
      words: false,
      saving: false
    };

    function Word(options) {
      this.word = options.word;
      this.full_word = options.full_word || false;
    }

    // Add word to list
    $scope.addWord = function(ref, options) {
      var word = new Word(options);
      $scope.shortNameConfig[ref].push(word);
      $scope.newWord[ref] = {};
    };

    // Remove word from list
    $scope.removeWord = function(ref, word) {
      var list = $scope.shortNameConfig[ref];

      for (var i = 0, l = list.length; i < l; i++) {
        if (list[i] === word) {
          list.splice(i, 1);
          break;
        }
      }
    };

    // Search for most common words in name field of place
    $scope.commonWords = function() {
      $scope.loading.words = true;

      placeAPI.mostCommonWords('name')
      .success(function(data) {

        $scope.loading.words = false;

        $scope.commonWords = data;
      });
    };

    $scope.buildShortNames = function() {
      $scope.loading.saving = true;

      placeAPI.buildShortNames($scope.shortNameConfig)
      .success(function(data) {

        $scope.loading.saving = false;
        console.log(data);
      });
    };

  }]);

})();