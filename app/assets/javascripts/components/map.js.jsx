Map = React.createClass({
  componentDidMount: function() {
    var map = React.findDOMNode(this.refs.map);
    var mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };

    this.map = new google.maps.Map(map, mapOptions);

    this.map.addListener('idle', function() {
      var latLng = this.getBounds();
      var northEast = latLng.getNorthEast();
      var southWest = latLng.getSouthWest();

      var latLngBounds = new google.maps.LatLngBounds(northEast, southWest);

      var bounds = {
        bounds: {
          "northEast": {"lat": String(latLngBounds.Qa.J), "lng": String(latLngBounds.Ma.J) },
          "southWest": {"lat": String(latLngBounds.Qa.j), "lng": String(latLngBounds.Ma.j) }
        }
      };

      ApiUtil.fetchBenches(bounds);

    }.bind(this.map));

    BenchStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function(){
    BenchStore.removeChangeListener(this._onChange);
  },
  _onChange: function(){
    this.setState( { benches: BenchStore.all() });
    this._mapBenches();
  },
  _mapBenches: function(){
    this.state.benches.map(function(bench) {
      var latLng = new google.maps.LatLng(bench.lat, bench.lng);

      var marker = new google.maps.Marker({
          position: latLng,
          map: this.map,
          title: bench.description
      });

    }.bind(this));
  },
  render: function(){
    return (
      <div id="map" ref="map"></div>
    );
  }
});
