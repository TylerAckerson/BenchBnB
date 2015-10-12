ApiActions = {
  receiveAllBenches: function(benches){
    AppDispatcher.dispatch({
      actionType: BenchConstants.BENCHES_RECEIVED,
      benches: benches
    });
  },
  receiveNewBench: function(newBench){
    AppDispatcher.dispatch({
      actionType: BenchConstants.NEW_BENCH_RECEIVED,
      bench: newBench
    });
  }
};
