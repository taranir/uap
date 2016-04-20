import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { reduxReactRouter, ReduxRouter } from 'redux-router';
import routes from './routes';
import configureStore from './store/configureStore';
import './app.global.css';


const store = configureStore();

console.log("routes", routes);
render(
  <div>
    <Provider store={store}>
      <ReduxRouter routes={routes}  />
    </Provider>
  </div>,
  document.getElementById('root')
);
