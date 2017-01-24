import React, { Component, PropTypes } from 'react';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Split from './Split';

import App from './App';
import Home from './Home';

function loadComponent(componentPath) {
  return props => <Split {...props} componentPath={componentPath}/>;
}

class Root extends Component {

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home}/>
          <Route path="/pages" component={loadComponent('pages/PagesRoot')}>
            <IndexRoute component={loadComponent('pages/PagesHome')}/>
            <Route path="/pages/:id" component={loadComponent('pages/PagesDetail')}/>
          </Route>
          <Route path="/chapters" component={loadComponent('chapters/ChaptersRoot')}>
            <IndexRoute component={loadComponent('chapters/ChaptersHome')}/>
            <Route path="/chapters/:id" component={loadComponent('chapters/ChaptersDetail')}/>
          </Route>
        </Route>
      </Router>
    );
  }
}

module.exports = Root;