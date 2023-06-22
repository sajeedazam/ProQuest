import { ADD_JOB, REMOVE_JOB, ACCEPT_JOB, REJECT_JOB, CLEAR_JOBS } from "./jobActions";

const initialState = { 
  acceptedJobs: [],
  rejectedJobs: []
}; 

export default function jobReducer(state = initialState, action) {
  switch (action.type) {
    case ACCEPT_JOB:
      return {
        ...state,
        acceptedJobs: [...state.acceptedJobs, action.payload]
      };
    case REJECT_JOB:
      return {
        ...state,
        rejectedJobs: [...state.rejectedJobs, action.payload]
      };
    case CLEAR_JOBS:
      return {
        ...state,
        acceptedJobs: [],
        rejectedJobs: []
      };
    default:
      return state;
  }
}