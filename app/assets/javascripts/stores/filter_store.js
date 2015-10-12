(function(root) {
  'use strict';

  var _filter = { bounds:  { northEast: null, southWest: null },
                  seating: { min: null, max: null } };
  var CHANGE_EVENT = "change";

  var resetFilter = function(){
    _filters = {};
  };

  root.filterStore = $.extend({}, EventEmitter.prototype, {
    addChangeListener: function(callback) {
      root.filterStore.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback) {
      root.filterStore.removeListener(CHANGE_EVENT, callback);
    },
  });

}(this));
