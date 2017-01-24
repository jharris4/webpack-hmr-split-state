import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Redbox from 'redbox-react';

import Root from './components/Root';

render(
  <AppContainer errorReporter={Redbox}>
    <Root/>
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./components/Root', () => {
    const NewRoot = require('./components/Root');
    render(
      <AppContainer errorReporter={Redbox}>
        <NewRoot/>
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
