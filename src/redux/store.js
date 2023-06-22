import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import userReducer from './userReducer';
import jobReducer from './jobReducer';
import React from 'react';
import App from '../App';
import { ReactDOM } from 'react-dom';
// Import other required items...

const rootReducer = combineReducers({
  user: userReducer,
  jobs: jobReducer
});

const store = createStore(rootReducer);

export default store;
