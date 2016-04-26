import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { reduxReactRouter, ReduxRouter } from 'redux-router';
import routes from './routes';
import configureStore from './store/configureStore';
import './app.global.css';

console.log("before configure store");

const store = configureStore();
console.log("after configure store");

console.log("index.js: ", routes);
// console.log(typeof(routes));
// console.log(routes.children);
// console.log(Array.isArray(routes));
// console.log(Array.isArray(routes.children));
// const rarray = routes.children;
console.log("index.js: ", store);

// <ReduxRouter blah="23423423424"
                // location={{}}
                // params={{}}
                // components={[]} />

render(
  <div>
    <Provider store={store} providerblah="123123">
      <ReduxRouter blah="1241412414" />
    </Provider>
  </div>,
  document.getElementById('root')
);
