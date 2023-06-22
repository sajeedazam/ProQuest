export const ACCEPT_JOB = 'ACCEPT_JOB';
export const REJECT_JOB = 'REJECT_JOB';
export const CLEAR_JOBS = 'CLEAR_JOBS';

export function acceptJob(job) {
  return {
    type: ACCEPT_JOB,
    payload: job
  }
}

export function rejectJob(job) {
  return {
    type: REJECT_JOB,
    payload: job
  }
}

export function clearJobs() {
  return {
    type: CLEAR_JOBS
  }
}