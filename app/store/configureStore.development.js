import { createStore, applyMiddleware, compose } from 'redux';
import { persistState } from 'redux-devtools';
import createLogger from 'redux-logger';
import { reduxReactRouter } from 'redux-router';
import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';
import routes from '../routes';
import createHistory from 'history/lib/createHashHistory';


const logger = createLogger({
  level: 'info',
  collapsed: true,
});



// const router = routerMiddleware(hashHistory);

// const routerStateSelector = state => state.get('router');

const enhancer = compose(
  applyMiddleware(logger),
  // window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument(),
  reduxReactRouter({
    routes,
    createHistory }),
  persistState(
    window.location.href.match(
      /[?&]debug_session=([^&]+)\b/
    )
  )
)(createStore);


export default function configureStore(initialState) {
  // const store = createStore(rootReducer, initialState, enhancer);
  // const store = enhancer(rootReducer, window.__INITIAL_STATE__);
  const store = enhancer(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers'))
    );
  }

  return store;
}
