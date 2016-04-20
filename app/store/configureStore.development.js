import { createStore, applyMiddleware, compose } from 'redux';
import { persistState } from 'redux-devtools';
import DevTools from '../containers/DevTools';
import createLogger from 'redux-logger';
//import { hashHistory } from 'react-router';
import { reduxReactRouter } from 'redux-router';
//import { routerMiddleware } from 'react-router-redux';
import reducer from '../reducers';

import routes from '../routes';
import _createHistory from 'history/lib/createBrowserHistory';
//import createHistory from "history/lib/createHashHistory";
import useStandardScroll from 'scroll-behavior/lib/useStandardScroll';

const logger = createLogger({
  level: 'info',
  collapsed: true,
});

const createHistory = useStandardScroll(_createHistory);

export default function configureStore() {
let finalCreateStore;
const { persistState } = require('redux-devtools');
finalCreateStore = compose(
    applyMiddleware(logger),
    window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument(),
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
  )(createStore);
console.log("createHistory", createHistory);
finalCreateStore = reduxReactRouter({ routes, createHistory:_createHistory })(finalCreateStore);
const store = finalCreateStore(reducer, window.__INITIAL_STATE__);
if (module.hot) {
  module.hot.accept('reducers', () => {
    store.replaceReducer(reducer);
  });
}
return store;

  // const store = compose(
  //   applyMiddleware(logger),
  //   reduxReactRouter({ routes, createHistory }),
  //   DevTools.instrument()
  // )(createStore)(reducer);
  // return store;
}
