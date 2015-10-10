ApiUtil = {
  fetchBenches: function(bounds) {
    $.ajax({
      url: 'api/benches',
      dataType: 'json',
      data: bounds,
      success: function(benches) {
        ApiActions.receiveAllBenches(benches);
      },
      error: function(resp){
        console.log(resp);
      }
    });
  }
};
