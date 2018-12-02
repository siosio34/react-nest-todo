/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import globalReducer from './pages/App/app.reducer';


/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}, history) {
  const rootReducer = combineReducers({
    router: connectRouter(history),
    globalReducer,
    ...injectedReducers,
  });

  // // Wrap the root reducer and return a new root reducer with router state
  // const mergeWithRouterState = connectRouter(history);
  // console.log('mergeWithRouterState', mergeWithRouterState);
  // console.log('addada',history );
  // console.log('mergeWithRouterState(rootReducer)', mergeWithRouterState(rootReducer));
  
  return rootReducer;
}
