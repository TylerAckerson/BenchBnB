(function(root) {
  'use strict';

  var _filter = { bounds:  { northEast: null, southWest: null },
                  seating: { min: null, max: null } };
  var CHANGE_EVENT = "change";

  var filterParams = function(){
    return $.extend({}, _filter);
  };

  var resetFilter = function(){
    _filter = {};
  };

  var updateFilter = function(filter){
    $.extend(_filter, filter);
    ApiUtil.fetchBenches(filterParams());
  };

  root.filterStore = $.extend({}, EventEmitter.prototype, {
    addChangeListener: function(callback) {
      root.filterStore.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
      root.filterStore.removeListener(CHANGE_EVENT, callback);
    },

    dispatcherID: AppDispatcher.register(function(payload) {
      switch (payload.actionType) {
        case (BenchConstants.FILTER_UPDATED):
          updateFilter(payload.filter);
          BenchStore.emit(CHANGE_EVENT);
          break;
        case (BenchConstants.FILTER_RESET):
          resetFilter();
          BenchStore.emit(CHANGE_EVENT);
          break;
        }
      })
    });
}(this));
