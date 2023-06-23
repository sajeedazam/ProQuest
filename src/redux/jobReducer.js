// import { ADD_JOB, REMOVE_JOB, ACCEPT_JOB, REJECT_JOB, CLEAR_JOBS } from "./jobActions";
import {createSlice} from '@reduxjs/toolkit';
const initialState = { 
  acceptedJobs: [
    { name: 'Hair cut2', id: '4' },
  ],
  rejectedJobs: [
    {name: 'Buzz', id : '5'},
  ]
}; 

// const jobReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'ACCEPT_JOB':
//       return {
//         // ...state.acceptedJobs.push({ name: 'Hair cut', id: '1' })
//         ...state,
//         acceptedJobs: [...state.acceptedJobs, action.payload]
//       };
//     case 'REJECT_JOB':
//       return {
//         ...state,
//         rejectedJobs: [...state.rejectedJobs, action.payload]
//       };
//     case 'CLEAR_JOBS':
//       return {
//         ...state,
//         acceptedJobs: [],
//         rejectedJobs: []
//       };
//     default:
//       return state;
//   }
// }

const jobReducer = createSlice({
  name: 'jobs',
  initialState: initialState,
  reducers: {
    acceptJob: (state, action) => {
      const newJob = { name: 'Hair cut23', id: '45' };
      state.acceptedJobs.push(newJob);
    },
    rejectJob: (state, action) => {
      state.rejectedJobs.push(action.payload);
    },
  }
});

// export default jobReducer;
export const {acceptJob, rejectJob} = jobReducer.actions;
export default jobReducer.reducer;