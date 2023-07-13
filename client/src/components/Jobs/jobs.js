// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { acceptJob, rejectJob } from '../../redux/jobReducer';
// import { Link } from 'react-router-dom';
// import '../Jobs/jobs.css';

// function Jobs({ jobs }) {
//     const dispatch = useDispatch();
//     const [localJobs, setLocalJobs] = useState(jobs);

//     const handleAcceptJob = (job) => {
//       dispatch(acceptJob(job));
//       setLocalJobs(localJobs.filter(j => j.name !== job.name));
//       console.log(localJobs);
//     };
  
//     const handleRejectJob = (job) => {
//       dispatch(rejectJob(job));
//       setLocalJobs(localJobs.filter(j => j.name !== job.name));
//     };
  
//     if (!jobs || !Array.isArray(jobs)) {
//       return <h2>No jobs available</h2>;
//     }
  
//     return (
//       <div >
//         <Link to="/professional" className='mt-3'>Back</Link>
//       <ul className="jobs-container"> 
//         {localJobs.map((job, index) => (
//           <div key={index} className="job-card">
//             <p>{job.name}</p>
//             <button onClick={() => handleAcceptJob(job)}>Accept</button>
//             <button onClick={() => handleRejectJob(job)}>Reject</button>
//           </div>
//         ))}
//       </ul>
//       </div> 
//     );
//   }
  
//   export default Jobs;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../Jobs/jobs.css';

function Jobs() {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetchJobs();
    }, []);

    const fetchJobs = async () => {
        const res = await axios.get('/jobs');
        setJobs(res.data);
    };

    const handleAcceptJob = async (job) => {
        try {
            await axios.delete(`/jobs/${job._id}`);
            setJobs(jobs.filter(j => j._id !== job._id));
        } catch (err) {
            console.error(err);
        }
    };

    const handleRejectJob = async (job) => {
        try {
            await axios.delete(`/jobs/${job._id}`);
            setJobs(jobs.filter(j => j._id !== job._id));
        } catch (err) {
            console.error(err);
        }
    };

    if (!jobs || !Array.isArray(jobs)) {
        return <h2>No jobs available</h2>;
    }

    return (
        <div>
            <Link to="/professional" className='mt-3'>Back</Link>
            <ul className="jobs-container">
                {jobs.map((job, index) => (
                    <div key={index} className="job-card">
                        <p>{job.name}</p>
                        <button onClick={() => handleAcceptJob(job)}>Accept</button>
                        <button onClick={() => handleRejectJob(job)}>Reject</button>
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default Jobs;
