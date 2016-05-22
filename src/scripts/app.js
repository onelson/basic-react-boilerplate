import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

import IndexRoute from 'react-router/lib/IndexRoute';
import Router from 'react-router/lib/Router';
import Route from 'react-router/lib/Route';
import browserHistory from 'react-router/lib/browserHistory';

import pages from './pages/index';
import Navigation from './components/navigation';

const App = React.createClass({
  propTypes: {
    children: PropTypes.object.isRequired
  },
  render () {
    return (
      <div>
        <header><Navigation/></header>
        <section>
          {this.props.children}
        </section>
        <footer>Footer</footer>
      </div>
    );
  }
});

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={pages.Home} />
    <Route path="about" component={pages.About} />
    <Route path="dynamic/:itemCount" component={pages.Dynamic} />
    <Route path="*" component={pages.NotFound} />
  </Route>
);

global.initApp = function (element) {
  ReactDOM.render(<Router history={browserHistory}>{routes}</Router>, element);
};
