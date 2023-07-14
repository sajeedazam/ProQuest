import { createStore, combineReducers } from 'redux';
import userReducer from './userReducer';
import jobReducer from './notifications/reducer';
import { configureStore } from '@reduxjs/toolkit';

// const rootReducer = combineReducers({
//   user: userReducer,
//   jobs: jobReducer
// });

// const store = createStore(rootReducer);

const store = configureStore({
  reducer: {jobs: jobReducer},
  devTools: true
});

export default store;
