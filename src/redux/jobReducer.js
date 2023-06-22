import { ADD_JOB } from "./jobActions";
import { REMOVE_JOB } from "./jobActions";

const initialState = []; // default jobs list is empty

export default function jobReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_JOB:
      return [...state, action.payload];
    case REMOVE_JOB:
      return state.filter(job => job.id !== action.payload);
    default:
      return state;
  }
}