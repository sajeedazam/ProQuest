import React from 'react';
import { useDispatch } from 'react-redux';
import { acceptJob, rejectJob } from '../../redux/jobActions.js';
import '../Jobs/jobs.css';

function Jobs({ jobs }) {
    const dispatch = useDispatch();
  
    const handleAcceptJob = (job) => {
      dispatch(acceptJob(job));
    };
  
    const handleRejectJob = (job) => {
      dispatch(rejectJob(job));
    };
  
    if (!jobs || !Array.isArray(jobs)) {
      return <h2>No jobs available</h2>;
    }
  
    return (
      <div className="jobs-container">
        {jobs.map((job) => (
          <div key={job.id} className="job-card">
            <h2>{job.name}</h2>
            <button onClick={() => handleAcceptJob(job)}>Accept</button>
            <button onClick={() => handleRejectJob(job)}>Reject</button>
          </div>
        ))}
      </div>
    );
  }
  
  export default Jobs;