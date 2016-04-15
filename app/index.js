import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { reduxReactRouter, ReduxRouter } from 'redux-router';
import getRoutes from './routes';
import configureStore from './store/configureStore';
import './app.global.css';

const store = configureStore();
// const history = syncHistoryWithStore(hashHistory, store);

render(
  <Provider store={store}>
    <ReduxRouter routes={getRoutes()} />
  </Provider>,
  document.getElementById('root')
);
