import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import '../Jobs/jobs.css';
import { acceptAsync, deleteItemAsync, getNotifsAsync } from '../../redux/notifications/thunks';

function Jobs({ jobs }) {
    const dispatch = useDispatch();
    const [localJobs, setLocalJobs] = useState(jobs);

    if (!jobs || !Array.isArray(jobs)) {
      return <h2>No jobs available</h2>;
    }


    const handleAcceptJob = async (job) => {
      try {
      await dispatch(acceptAsync(job));
      await setLocalJobs(dispatch(getNotifsAsync()));
    
      } catch (error) {
        console.error(error);
      }
    };
  
    const handleRejectJob = async (job) => {
      try {
        await dispatch(deleteItemAsync(job));
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
        <p><strong>Price:</strong> {job.price}</p>
        <button onClick={() => handleAcceptJob(job._id)}>Accept</button>
        <button onClick={() => handleRejectJob(job._id)}>Reject</button>
      </div>
    ))}
      </ul>
      </div> 
    );
  }
  
  export default Jobs;

