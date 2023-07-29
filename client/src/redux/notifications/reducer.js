import { createSlice } from '@reduxjs/toolkit';
import { getJobsAsync, addJobsAsync, deleteItemAsync, checkoutAsync, getAcceptedAsync, getCompletedAsync, getAmountAsync } from './thunks';
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
  getComplete: REQUEST_STATE.IDLE,
  getAccepts: REQUEST_STATE.IDLE,
  getAmount: REQUEST_STATE.IDLE,
  error: null,
};

const jobReducer = createSlice({
  name: 'jobs',
  initialState: INITIAL_STATE,
  reducers: {
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
      .addCase(deleteItemAsync.pending, (state) => {
        state.deleteItem = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(deleteItemAsync.fulfilled, (state, action) => {
        state.deleteItem = REQUEST_STATE.FULFILLED;
        const itemId = action.payload._id;
      })
      .addCase(deleteItemAsync.rejected, (state, action) => {
        state.deleteItem = REQUEST_STATE.REJECTED;
        state.error = action.error;
      })

      .addCase(checkoutAsync.pending, (state) => {
        state.checkout = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(checkoutAsync.fulfilled, (state, action) => {
        state.checkout = REQUEST_STATE.FULFILLED;
      })
      .addCase(checkoutAsync.rejected, (state, action) => {
        state.checkout = REQUEST_STATE.REJECTED;
        state.error = action.payload;
      })

      .addCase(getAcceptedAsync.pending, (state) => {
        state.getAccepts = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(getAcceptedAsync.fulfilled, (state, action) => {
        state.getAccepts = REQUEST_STATE.FULFILLED;
        state.accepts = action.payload
      })
      .addCase(getAcceptedAsync.rejected, (state, action) => {
        state.getAccepts = REQUEST_STATE.REJECTED;
        state.error = action.error;
      })

      .addCase(getCompletedAsync.pending, (state) => {
        state.getComplete = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(getCompletedAsync.fulfilled, (state, action) => {
        state.getComplete = REQUEST_STATE.FULFILLED;
        state.completes = action.payload;
      })
      .addCase(getCompletedAsync.rejected, (state, action) => {
        state.getComplete = REQUEST_STATE.REJECTED;
        state.error = action.error;
      })

      .addCase(getAmountAsync.pending, (state) => {
        state.getAmount = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(getAmountAsync.fulfilled, (state, action) => {
        state.getAmount = REQUEST_STATE.FULFILLED;
        state.amount = action.payload;
      })
      .addCase(getAmountAsync.rejected, (state, action) => {
        state.getAmount = REQUEST_STATE.REJECTED;
        state.error = action.error;
      })
  }
});

export default jobReducer.reducer;