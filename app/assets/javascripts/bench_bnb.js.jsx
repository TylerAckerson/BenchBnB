
$(function() {
  'use strict';

  var root = document.getElementById('content');
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;

  var App = React.createClass({
    render: function() {
      return (
        <div>
          <header><h1>BenchBnB</h1></header>
          {this.props.children}
        </div> );
      }
  });

  var routes = (
    <Router>
      <Route path="/" component={App}>
        <IndexRoute component={Search}/>
      </Route>
      <Route path="/benches/new" component={BenchForm}/>
    </Router>
  );

  React.render(routes, root);
});
