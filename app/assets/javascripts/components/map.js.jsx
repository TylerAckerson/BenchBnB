Map = React.createClass({
  // mixins: [ReactRouter.History],

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
          "northEast": {"lat": String(latLngBounds.La.I), "lng": String(latLngBounds.Pa.I) },
          "southWest": {"lat": String(latLngBounds.La.j), "lng": String(latLngBounds.Pa.j) }
        }
      };

      FilterActions.receiveFilters(bounds);
    }.bind(this.map));


    this.map.addListener('click', function(event) {
      this.handleClick(event);
    }.bind(this));

    // this.getDistances();
    BenchStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function(){
    BenchStore.removeChangeListener(this._onChange);
  },
  _onChange: function(){
    this.setState( { benches: BenchStore.all() });
    this._mapBenches();
  },
  createImage: function(url){
    var image = {
      url: url,
      size: new google.maps.Size(32, 32),
      origin: new google.maps.Point(0,0),
      anchor: new google.maps.Point(0, 32)
    };
    return image;
  },
  _mapBenches: function(){
    this.state.benches.map(function(bench) {
      var latLng = new google.maps.LatLng(bench.lat, bench.lng);

      var marker = new google.maps.Marker({
          position: latLng,
          map: this.map,
          title: bench.description,
          // icon: createImage("assets/bench.png")
          // icon: this.createImage("https://www.parknpool.com/site-images/models/18-gallery/18be-042cd-benches-and-glider-benches-im.png")
      });

    }.bind(this));
  },

  handleClick: function(e) {
    var lat = e.latLng.J;
    var lng = e.latLng.M;

    this.props.onClick({lat: lat, lng: lng});
  },
  // getDistances: function() {
  //   var origin2 = "1061 Market St, San Francisco, CA 94103";
  //   // var destinationB = new google.maps.LatLng(37.7758, -122.435);
  //   var destinationB = "1595 Clay St, San Francisco, CA 94109";
  //
  //   var service = new google.maps.DistanceMatrixService();
  //   service.getDistanceMatrix(
  //     {
  //       origins: [origin2],
  //       destinations: [destinationB],
  //       travelMode: google.maps.TravelMode.DRIVING,
  //       unitSystem: google.maps.UnitSystem.IMPERIAL,
  //     }, function(response, statuse) {
  //       // console.log(response.rows[0].elements[0].distance.text);
  //     });
  // },
  render: function(){
    return (
      <div id="map" ref="map"></div>
    );
  }
});
