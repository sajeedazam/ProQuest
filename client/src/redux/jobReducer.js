import {createSlice} from '@reduxjs/toolkit';
const { v4: uuid } = require('uuid');

const initialState = { 
  acceptedJobs: [
    { id: uuid(), name: 'Haircut'},
  ],
  rejectedJobs: [
    { id: uuid(), name: 'Plumbing'},
  ],
}; 

const jobReducer = createSlice({
  name: 'jobs',
  initialState: initialState,
  reducers: {
    acceptJob: (state, action) => {
      const newItem = { id: uuid(), ...action.payload };
      state.acceptedJobs.push(newItem);
    },
    rejectJob: (state, action) => {
      state.rejectedJobs.push(action.payload);
    },
    clearJobs: (state) => {
      state.acceptedJobs = [];
      state.rejectedJobs = [];
    },
  }
});

export const {acceptJob, rejectJob, clearJobs} = jobReducer.actions;
export default jobReducer.reducer;