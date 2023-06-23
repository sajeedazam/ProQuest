import React from 'react';
import { useDispatch } from 'react-redux';
// import { acceptJob, rejectJob } from '../../redux/jobActions.js';
import { acceptJob, rejectJob } from '../../redux/jobReducer';
import '../Jobs/jobs.css';

function Jobs({ jobs }) {
    const dispatch = useDispatch();
  
    const handleAcceptJob = (e) => {
      const newJob = { name: 'Hair cut3', id: '5' };
      dispatch(acceptJob());
    };
  
    const handleRejectJob = (job) => {
      dispatch(rejectJob(job));
    };
  
    if (!jobs || !Array.isArray(jobs)) {
      return <h2>No jobs available</h2>;
    }
  
    return (
      <ul className="jobs-container"> 
        {jobs.map((job) => (
          <div key={job.id} className="job-card">
            <h2>{job.name}</h2>
            <button onClick={handleAcceptJob}>Accept</button>
            <button onClick={() => handleRejectJob(job)}>Reject</button>
          </div>
            // <li key={index}>
            //   <h3>{job.name}</h3>
            // </li>
        ))}
      </ul>
    );
  }
  
  export default Jobs;