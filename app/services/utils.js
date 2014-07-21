(function() {
  angular.module('utils', [])
  .factory('utils', [function() {
    var utils = {};

    // get value in obj from string reference
    utils.getPropByString = function(obj, propString, provider) {
      if (!propString)
          return obj;

      var prop, props = propString.split('.');

      var value;

      for (var i = 0, iLen = props.length - 1; i < iLen; i++) {
          prop = props[i];

          var candidate = obj[prop];
          if (candidate !== undefined) {
              obj = candidate;
          } else {
              break;
          }
      }

      value = obj[props[i]];

      // Check if array - for yelp API
      if (Array.isArray(value)) {
        value = value[0];
      }

      // Google has address clumped together (1234 example st, detroit)
      if (provider && provider === 'google' && propString === 'vicinity') {
        value = value.split(',')[0];
      }

      return value;
    };

    // Merge saved with found result from Google (get place_id)
    // Return arr of places to save
    utils.formatSave = function(places, provider) {
      var toSave = [];

      for (var i = 0, l = places.length; i < l; i++) {

        // Only save places that have been selected (have a suggestion set)
        if (places[i].suggestion) {

          // Save formatting by provider
          switch(provider) {
            case 'google':
              places[i].saved.google.id = places[i].suggestion.place.place_id;
              toSave.push(places[i].saved);
            case 'facebook':
              places[i].saved.facebook.id = places[i].suggestion.place.id;
              places[i].saved.facebook.url = places[i].suggestion.place.link;
              toSave.push(places[i].saved);
          }
        }
      }
      return toSave;
    };

    // add opened field to all processed
    utils.processPlaces = function(places) {
      angular.forEach(places.assess, function(place) {
        for (var i = 0, l = place.processed.length; i < l; i++) {

          // set to show the first entry in accordion
          place.processed[i].open = i === 0 ? true : false;
        }
      });

      return places;
    };

    return utils;
  }])
})();