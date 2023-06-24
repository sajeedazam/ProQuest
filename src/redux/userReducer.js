// import { SET_USER, CLEAR_USER } from './userActions';
// const initialState = null; 

// export default function userReducer(state = initialState, action) {
//   switch (action.type) {
//     case SET_USER:
//       return action.payload;
//     case CLEAR_USER:
//       return null;
//     default:
//       return state;
//   }
// }

import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  users: []
};

const userReducer = createSlice({
  name: 'users',
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      state.users.push(action.payload);
    },
    clearUser: (state) => {
      state.users = [];
    },
  }
});

export const {setUser, clearUser} = userReducer.actions;
export default userReducer.reducer;