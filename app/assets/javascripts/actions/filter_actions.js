FilterActions = {
  receiveFilters: function(filter){
    AppDispatcher.dispatch({
      actionType: BenchConstants.FILTER_UPDATED,
      filter: filter
    });
  },
};
