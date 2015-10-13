Filter = React.createClass({
  getInitialState: function(){
    return { seating: { min: 0, max: 10 }};
  },

  updateSeatingMin: function(e){
    var min = parseInt(event.target.value);
    this.setState( { seating: { min: min } } );

    FilterActions.receiveFilters(this.state.seating);
  },
  updateSeatingMax: function(e){
    var max = parseInt(event.target.value);
    this.setState( { seating: { max: max } } );

    FilterActions.receiveFilters(this.state.seating);
  },

  render: function () {
    return (
      <div className="seating-filter form">
        <h3>Filter</h3>

        <form id="seating-filter-form">

          <label className="form-label">
            Min Seats:
            <input
              ref='min'
              className="form-control"
              value={this.state.seating.min}
              placeholder="e.g. 0"
              onChange={this.updateSeatingMin}/>
          </label>

          <label className="form-label">
            Max seats:
            <input
              ref='max'
              className="form-control"
              value={this.state.seating.max}
              placeholder="e.g. 3"
              onChange={this.updateSeatingMax}/>

          </label>
        </form>
      </div>
    );
  }
});
