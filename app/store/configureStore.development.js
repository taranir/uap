
// import { createStore, applyMiddleware, compose } from 'redux';
// import { persistState } from 'redux-devtools';
// import DevTools from '../containers/DevTools';
// import createLogger from 'redux-logger';
// //import { hashHistory } from 'react-router';
// import { reduxReactRouter } from 'redux-router';
// //import { routerMiddleware } from 'react-router-redux';
// import reducer from '../reducers';

// import _routes from '../routes';
// import _createHistory from 'history/lib/createHashHistory';
// //import createHistory from "history/lib/createHashHistory";
// import useStandardScroll from 'scroll-behavior/lib/useStandardScroll';

// const logger = createLogger({
//   level: 'info',
//   collapsed: true,
// });

// const createHistory2 = useStandardScroll(_createHistory);

// export default function configureStore() {
// let finalCreateStore;
// const { persistState } = require('redux-devtools');
// finalCreateStore = compose(
//     applyMiddleware(logger),
//     window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument(),
//     persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
//   )(createStore);
// console.log("routes in configureStore", _routes);

// finalCreateStore = reduxReactRouter({ routes: _routes, createHistory:_createHistory, asdf: 5 })(finalCreateStore);
// console.log("final create store created");
// const store = finalCreateStore(reducer, window.__INITIAL_STATE__);
// if (module.hot) {
//   module.hot.accept('reducers', () => {
//     store.replaceReducer(reducer);
//   });
// }
// console.log("replace reducer thing");
// return store;

//   // const store = compose(
//   //   applyMiddleware(logger),
//   //   reduxReactRouter({ routes, createHistory }),
//   //   DevTools.instrument()
//   // )(createStore)(reducer);
//   // return store;
// }


// import { createStore, applyMiddleware, compose } from 'redux';
// import { devTools, persistState } from 'redux-devtools';
// import { reduxReactRouter } from 'redux-router';
// import { createHistory } from 'history';
// import thunk from 'redux-thunk';

// import rootReducer from '../reducers/rootReducer';

// const createStoreWithMiddleware = compose(
//   applyMiddleware(thunk),
//   devTools(),
//   reduxReactRouter({ createHistory })
// )(createStore);

// const store = createStoreWithMiddleware(rootReducer);

// export default store;



// import { createStore, applyMiddleware, compose } from 'redux';
// import { persistState } from 'redux-devtools';
// import DevTools from '../containers/DevTools';
// import createLogger from 'redux-logger';
// import { reduxReactRouter } from 'redux-router';
// import reducer from '../reducers';

// import routes from '../routes';
// import createHistory from 'history/lib/createHashHistory';
// import useStandardScroll from 'scroll-behavior/lib/useStandardScroll';

// const logger = createLogger({
//   level: 'info',
//   collapsed: true,
// });

// export default function configureStore() {
//   console.log("routes in configureStore", routes);


//   let finalCreateStore;
//   const { persistState } = require('redux-devtools');
//   finalCreateStore = compose(
//       applyMiddleware(logger),
//       reduxReactRouter({ routes, createHistory }),
//       window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument(),
//       persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
//     )(createStore);
//   console.log("final create store created");

//   const store = finalCreateStore(reducer, window.__INITIAL_STATE__);
//   if (module.hot) {
//     module.hot.accept('reducers', () => {
//       store.replaceReducer(reducer);
//     });
//   }
//   return store;
// }


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
