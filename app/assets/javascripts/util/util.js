ApiUtil = {
  fetchBenches: function(filter) {
    $.ajax({
      url: 'api/benches',
      dataType: 'json',
      data: filter,
      success: function(benches) {
        ApiActions.receiveAllBenches(benches);
      },
      error: function(resp){
        console.log(resp);
      }
    });
  },
  createBench: function(bench, callback) {
    $.ajax({
      url: 'api/benches',
      method: 'POST',
      data: {bench: bench},
      dataType: 'json',
      success: function(newBench) {
        ApiActions.receiveNewBench(newBench);
      },
      error: function(resp){
        console.log(resp);
      }
    });
  }
};
