import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { reduxReactRouter, ReduxRouter } from 'redux-router';
import routes from './routes';
import configureStore from './store/configureStore';
import './app.global.css';

const store = configureStore();

render(
  <div>
  	<div>Navbar</div>
    <Provider store={store} >
      <ReduxRouter />
    </Provider>
  </div>,
  document.getElementById('root')
);
