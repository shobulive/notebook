import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import auth from './Reducers/auth';
import user from './Reducers/user';
import feeds from './Reducers/feeds';
import logger from 'redux-logger';
const store = createStore(
  combineReducers({ auth, user, feeds }),
  applyMiddleware(thunk, logger)
);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
