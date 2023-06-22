//jobActions.js
export const ADD_JOB = 'ADD_JOB';
export const REMOVE_JOB = 'REMOVE_JOB';

export function addJob(job) {
  return {
    type: ADD_JOB,
    payload: job
  }
}

export function removeJob(jobId) {
  return {
    type: REMOVE_JOB,
    payload: jobId
  }
}
