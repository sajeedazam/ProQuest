import {createSlice} from '@reduxjs/toolkit';
const { v4: uuid } = require('uuid');


let initialState = { 
  acceptedJobs: [
    { id: uuid(), name: 'Hair cut2'},
  ],
  rejectedJobs: [],
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
  }
});

export const {acceptJob, rejectJob} = jobReducer.actions;
export default jobReducer.reducer;