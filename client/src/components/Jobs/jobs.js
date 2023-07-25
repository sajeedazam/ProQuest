import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { acceptJob, clearJobs, rejectJob } from '../../redux/notifications/reducer';
import { Link } from 'react-router-dom';
import '../Jobs/jobs.css';

function Jobs({ jobs }) {
    const dispatch = useDispatch();
    const [localJobs, setLocalJobs] = useState(jobs);

    if (!jobs || !Array.isArray(jobs)) {
      return <h2>No jobs available</h2>;
    }

    const handleAcceptJob = async (job) => {
      try {
        await dispatch(acceptJob(job));
      setLocalJobs(localJobs.filter(j => j.name !== job.name));
      console.log(localJobs);
      } catch (error) {
        console.error(error);
      }
    };
  
    const handleRejectJob = async (job) => {
      try {
        await dispatch(rejectJob(job));
        setLocalJobs(localJobs.filter(j => j.id !== job.id));;
      } catch (error) {
        console.error(error);
      }
      
    };
  
    return (
      <div >
        <Link to="/professional" className='mt-3'>Back</Link>
      <ul className="jobs-container"> 
      {jobs.map((job, index) => (
      <div key={index} className="job-card">
        <p><strong>Job Name:</strong> {job.name}</p>
        <p><strong>Category:</strong> {job.category}</p>
        <p><strong>Time:</strong> {job.time}</p>
        <p><strong>Customer Name:</strong> {job.customerName}</p>
        <p><strong>Phone:</strong> {job.phone}</p>
        <button onClick={() => handleAcceptJob(job)}>Accept</button>
        <button onClick={() => handleRejectJob(job)}>Reject</button>
      </div>
    ))}
      </ul>
      </div> 
    );
  }
  
  export default Jobs;

