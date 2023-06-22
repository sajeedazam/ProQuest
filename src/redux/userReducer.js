//userReducer.js
import { SET_USER, CLEAR_USER } from './userActions';

const initialState = null; // default user is null

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return action.payload;
    case CLEAR_USER:
      return null;
    default:
      return state;
  }
}
