import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history'

import App from './pages/App';

import configureStore from './configureStore';

const history = createBrowserHistory();

// Create redux store with history
const initialState = {};

const store = configureStore(initialState, history);

const MOUNT_NODE = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>,
    MOUNT_NODE,
  );



