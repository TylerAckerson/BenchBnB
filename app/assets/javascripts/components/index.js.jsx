Index = React.createClass({
  getInitialState: function(){
    return { benches: BenchStore.all() }
  },

  _onChange: function() {
    this.setState( {benches: BenchStore.all()} );
  },

  componentDidMount: function() {
    BenchStore.addChangeListener(this._onChange);
    ApiUtil.fetchBenches();
  },

  componentWillUnmount: function() {
    BenchStore.removeChangeListener(this._onChange);
  },

  render: function () {
    console.log("bench length: " + this.state.benches.length);
    return (
      <div className="index">
          { this.state.benches.map(function(bench){
                return <span>{bench.description}</span>;
            })
          }
      </div>
    );
  }
});
