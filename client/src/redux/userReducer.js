import { createSlice } from '@reduxjs/toolkit';

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

export const { setUser, clearUser } = userReducer.actions;
export default userReducer.reducer;