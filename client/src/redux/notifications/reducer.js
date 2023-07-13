import { createSlice } from '@reduxjs/toolkit';
import { getJobsAsync, addJobsAsync } from './thunks';

const REQUEST_STATE = {
  IDLE: 'IDLE',
  PENDING: 'PENDING',
  FULFILLED: 'FULFILLED',
  REJECTED: 'REJECTED'
};

const INITIAL_STATE = {
  jobs: [],
  getJobs: REQUEST_STATE.IDLE,
  addJobs: REQUEST_STATE.IDLE,
  error: null
};

const jobReducer = createSlice({
  name: 'jobs',
  initialState: INITIAL_STATE,
  reducers: {
    acceptJob: (state, action) => {
      const newItem = { id: 1, ...action.payload };
      state.acceptedJobs.push(newItem);
    },
    rejectJob: (state, action) => {
      state.rejectedJobs.push(action.payload);
    },
    clearJobs: (state) => {
      state.acceptedJobs = [];
      state.rejectedJobs = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getJobsAsync.pending, (state) => {
        state.getJobs = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(getJobsAsync.fulfilled, (state, action) => {
        state.getJobs = REQUEST_STATE.FULFILLED;
        state.items = action.payload
      })
      .addCase(getJobsAsync.rejected, (state, action) => {
        state.getJobs = REQUEST_STATE.REJECTED;
        state.error = action.error;
      })
      .addCase(addJobsAsync.pending, (state) => {
        state.addJobs = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(addJobsAsync.fulfilled, (state, action) => {
        state.addJobs = REQUEST_STATE.FULFILLED;
        state.items.push(action.payload);
      })
      .addCase(addJobsAsync.rejected, (state, action) => {
        state.addJobs = REQUEST_STATE.REJECTED;
        state.error = action.error;
      })
  }
});

export const { acceptJob, rejectJob, clearJobs } = jobReducer.actions;
export default jobReducer.reducer;