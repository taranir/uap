import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import autocomplete from './../containers/Autocomplete/reducer';
import pub from './../containers/PubReader/reducer';

import Immutable from 'immutable';


// const rootReducer = combineReducers({
//   // other reducers ...
//   router: routerStateReducer
// });

export default rootReducer;

const rootReducer = combineReducers({
  router: routerStateReducer,
  autocomplete,
  pub
});

export function ensureImmutable(state) {
	console.log("what");
	return state;
	// For some reason the @@INIT action is receiving a state variable that is a regular object.
	// If that's the case, cast it to Immutable and keep chugging.
	// If the @@INIT weirdness can be solved, we can remove this function.
	// let output;
	// if (!Immutable.Iterable.isIterable(state)) {
	// 	output = Immutable.fromJS(state);
	// } else {
	// 	output = state;
	// }
	// return output;
}

export default rootReducer;

