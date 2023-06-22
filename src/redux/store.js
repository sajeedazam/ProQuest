import { createStore, combineReducers } from 'redux';
import userReducer from './userReducer';
import jobReducer from './jobReducer';
// Import other required items...

const rootReducer = combineReducers({
  user: userReducer,
  jobs: jobReducer
});

const store = createStore(rootReducer);

export default store;
