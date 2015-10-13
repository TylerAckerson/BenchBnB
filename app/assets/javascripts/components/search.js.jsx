Search = React.createClass({
  // mixins: [ReactRouter.History],

  handleMapClick: function(coords){
    this.props.history.pushState(null, "benches/new", coords);
  },
  render: function(){
    return (
      <div>
        <Map onClick={this.handleMapClick}/>
        <Index />
        <Filter />
      </div>
    );
  }
});
