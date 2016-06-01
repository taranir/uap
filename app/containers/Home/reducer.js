import Immutable from 'immutable';
import {ensureImmutable} from 'reducers';

import {
	OFFLINE_ON,
	OFFLINE_OFF
} from 'containers/Home/actions';

export const defaultState = Immutable.Map({
	offlineMode: false
});

function offlineOn(state) {
	console.log("offline on");
	return state.mergeIn(["offlineMode"], true);
}

function offlineOff(state) {
	console.log("offline off");
	return state.mergeIn(["offlineMode"], false);
}

export default function homeReducer(state = defaultState, action) {
	console.log("inside homereducer");
	switch (action.type) {
		case OFFLINE_ON:
			return offlineOn(state);
		case OFFLINE_OFF:
			return offlineOff(state);
		default:
			return ensureImmutable(state);
	}
}