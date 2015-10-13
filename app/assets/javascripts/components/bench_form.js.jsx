BenchForm = React.createClass({
  getInitialState: function(){
    return { lat: null, lng: null, description: ""};
  },

  componentDidMount: function() {
    var lat = this.props.location.query.lat;
    var lng = this.props.location.query.lng;

    this.setState({lat: lat, lng: lng});
  },

  updateLat: function(){
    this.setState({lat: event.target.value});
  },

  updateLng: function(){
    this.setState({lng: event.target.value});
  },

  updateDescription: function(){
    this.setState({description: event.target.value});
  },

  handleSubmit: function (event) {
    event.preventDefault();

    var newBench = { lat: this.state.lat,
                          lng: this.state.lng,
                          description: this.state.description };

    ApiUtil.createBench(newBench);

    this.setState({lat: "", lng: "", description: ""});
  },

  render: function () {
    return (
      <div className="new-bench form">
        <h3>New Bench</h3>
        <form id="new-bench-form"
              onSubmit={this.handleSubmit}>

          <label className="form-label">
            Latitude:
            <input
              ref='lat'
              className="form-control"
              value={this.state.lat}
              placeholder="e.g. 37.7758"
              onChange={this.updateLat}/>
          </label>

          <label className="form-label">
            Longitude:
            <input
              ref='lng'
              className="form-control"
              value={this.state.lng}
              placeholder="e.g. -122.435"
              onChange={this.updateLng}/>
          </label>

          <label className="form-label">
            Description:
            <input
              ref='description'
              className="form-control"
              value={this.state.description}
              placeholder="e.g. On the corner of 12th and Market"
              onChange={this.updateDescription}/>
          </label>

          <button className="submit-bench btn btn-primary">Create bench</button>

        </form>
      </div>
    );
  }
});
