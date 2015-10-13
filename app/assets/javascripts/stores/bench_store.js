(function(root) {
  'use strict';

  var _benches = [];
  var CHANGE_EVENT = "change";

  var resetBenches = function(benches){
    _benches = benches;
  };

  root.BenchStore = $.extend({}, EventEmitter.prototype, {
    all: function() {
      return _benches.slice(0);
    },
    addChangeListener: function(callback) {
      root.BenchStore.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback) {
      root.BenchStore.removeListener(CHANGE_EVENT, callback);
    },
    dispatcherID: AppDispatcher.register(function(payload) {
      switch (payload.actionType) {
        case (BenchConstants.BENCHES_RECEIVED):
          resetBenches(payload.benches);
          BenchStore.emit(CHANGE_EVENT);
          break;
        case (BenchConstants.NEW_BENCH_RECEIVED):
          resetBenches(payload.benches);
          BenchStore.emit(CHANGE_EVENT);
          break;
      }
    })
  });
}(this));
