ApiUtil = {
  fetchBenches: function() {
    $.ajax({
      url: 'api/benches',
      success: function(benches) {
        ApiActions.receiveAllBenches(benches);
      },
      error: function(resp){
        console.log(resp);
      }
    });
  }
};
