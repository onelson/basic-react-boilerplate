import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

import IndexRoute from 'react-router/lib/IndexRoute';
import Router from 'react-router/lib/Router';
import Route from 'react-router/lib/Route';
import browserHistory from 'react-router/lib/browserHistory';

import Provider from 'react-redux/lib/components/Provider';

import configureStore from './state/index';
import pages from './pages/index';
import Navigation from './components/navigation';

const store = configureStore();

const App = React.createClass({
  propTypes: {
    children: PropTypes.object.isRequired
  },
  render () {
    return (
    <Provider store={store}>
      <div>
        <header><Navigation/></header>
        <section>
          {this.props.children}
        </section>
        <footer>Footer</footer>
      </div>
    </Provider>
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
