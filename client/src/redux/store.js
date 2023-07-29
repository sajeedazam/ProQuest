import jobReducer from './notifications/reducer';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {jobs: jobReducer},
  devTools: true
});

export default store;
