const INDEX = 'INDEX';
const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';

export function makeAsyncActionTypes(base) {
  return [INDEX, REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
		acc[type] = `${base}_${type}`;
		return acc;
	}, {});
}

export function makeActionCreator(type, payload = {}) {
  return {type, ...payload};
}

export function makeAsyncActionCreator(action) {
	let actionCreator = () => makeActionCreator(action.INDEX);
	actionCreator.request = () => makeActionCreator(action.REQUEST);
	actionCreator.success = () => makeActionCreator(action.SUCCESS);
	actionCreator.failure = () => makeActionCreator(action.FAILURE);
	return actionCreator;
}
