Index = React.createClass({
  getInitialState: function(){
    return { benches: BenchStore.all() }
  },

  _onChange: function() {
    this.setState( {benches: BenchStore.all()} );
  },

  componentDidMount: function() {
    BenchStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    BenchStore.removeChangeListener(this._onChange);
  },

  render: function () {
    return (
      <ul className="index">
          { this.state.benches.map(function(bench){
                return <li key={bench.id}>{ "Description: " + bench.description +
                                            ", Location: " + bench.lat
                                            + ", " + bench.lng} </li>;
            })
          }
      </ul>
    );
  }
});
