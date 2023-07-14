import { createSlice } from '@reduxjs/toolkit';
import { getJobsAsync, addJobsAsync } from './thunks';
import { 
  acceptJobAsync, 
  rejectJobAsync 
} from './thunks';
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
      state.acceptedJobs = state.acceptedJobs ? state.acceptedJobs : []
      const newItem = { id: 1, ...action.payload };
      state.acceptedJobs.push(newItem);
    },
    rejectJob: (state, action) => {
      state.rejectedJobs = state.rejectedJobs ? state.rejectedJobs : []
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

      .addCase(acceptJobAsync.pending, (state) => {
        state.addJobs = REQUEST_STATE.PENDING;
        state.error = null;
    })
    .addCase(acceptJobAsync.fulfilled, (state, action) => {
        state.addJobs = REQUEST_STATE.FULFILLED;
        state.jobs = state.jobs.filter(job => job.id !== action.payload);
    })
    .addCase(acceptJobAsync.rejected, (state, action) => {
        state.addJobs = REQUEST_STATE.REJECTED;
        state.error = action.error;
    })
    .addCase(rejectJobAsync.pending, (state) => {
        state.addJobs = REQUEST_STATE.PENDING;
        state.error = null;
    })
    .addCase(rejectJobAsync.fulfilled, (state, action) => {
        state.addJobs = REQUEST_STATE.FULFILLED;
        state.jobs = state.jobs.filter(job => job.id !== action.payload);
    })
    .addCase(rejectJobAsync.rejected, (state, action) => {
        state.addJobs = REQUEST_STATE.REJECTED;
        state.error = action.error;
    })
  }
});

export const { acceptJob, rejectJob, clearJobs } = jobReducer.actions;
export default jobReducer.reducer;