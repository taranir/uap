export const OFFLINE_ON = 'home/OFFLINE_ON';
export const OFFLINE_OFF = 'home/OFFLINE_OFF';

export function offlineOn() {
	return {
		type: OFFLINE_ON
	};
}

export function offlineOff() {
	return {
		type: OFFLINE_OFF
	};
}