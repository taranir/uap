import { createStore, applyMiddleware, compose } from 'redux';
import { persistState } from 'redux-devtools';
import { devTools } from 'redux-devtools';
import createLogger from 'redux-logger';
//import { hashHistory } from 'react-router';
import { reduxReactRouter } from 'redux-router';
//import { routerMiddleware } from 'react-router-redux';
import reducer from '../reducers';

import routes from '../routes';
// import createHistory from 'history/lib/createBrowserHistory';
import createHistory from "history/lib/createHashHistory";
import useStandardScroll from 'scroll-behavior/lib/useStandardScroll';

const logger = createLogger({
  level: 'info',
  collapsed: true,
});

const scrollableHistory = useStandardScroll(createHistory);
//const router = routerMiddleware(hashHistory);

// const enhancer = compose(
//   applyMiddleware(thunk, logger),
//   reduxReactRouter({
//     routes,
//     scrollableHistory
//   }),
//   DevTools.instrument(),
//   persistState(
//     window.location.href.match(
//       /[?&]debug_session=([^&]+)\b/
//     )
//   )
// );

export default function configureStore() {
  // const store = createStore(rootReducer, initialState, enhancer);
  const store = compose(
    applyMiddleware(logger),
    reduxReactRouter({ routes, createHistory }),
    devTools()
  )(createStore)(reducer);
  return store;
}
