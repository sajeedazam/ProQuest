import React, { useState } from 'react';
import './phomepage.css';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearJobs } from '../../redux/notifications/reducer';
// import axios from 'axios';

import { connect } from 'react-redux';

function ProfessionalHomescreen() {
  const [showJobs, setShowJobs] = useState(false);
  const dispatch = useDispatch();
  const acceptedJobs = useSelector(state => state.jobs.acceptedJobs);
  const rejectedJobs = useSelector((state) => state.jobs.rejectedJobs)
  const earnedAmount = useSelector(state => state.jobs.earnedAmount);
  console.log(useSelector((state) => state))

  const toggleJobs = () => {
    setShowJobs(!showJobs);
  };

  const handleClearJobs = () => {
    dispatch(clearJobs());
  };
  
  
  // const acceptJob = async (jobId) => {
  //   try {
  //     const res = await axios.post('http://localhost:5001/job/accept', { jobId });
  //     console.log(res.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // const rejectJob = async (jobId) => {
  //   try {
  //     const res = await axios.post('http://localhost:5001/job-list', { jobId });
  //     console.log(res.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <div className="pHomepage-body">
      <div className="pHomepage-image"></div>
      <div className="pHomepage-container">
        <Link to="/jobs" className='mt-3'>Notifications</Link>
        <h1 className="pHomepage-title">Logged in as a professional</h1>
        <h2 className="pHomepage-info">Professional Name: John Doe</h2>
        <h2 className="pHomepage-info">Location of the Professional: Vancouver, Canada</h2>
        <button className="button" onClick={toggleJobs}>
          {showJobs ? "Hide Jobs" : "Show Jobs"}
        </button>

        <h2 className="pHomepage-info">Amount earned: ${earnedAmount}</h2>
        <h2 className="pHomepage-info">Timings: 9AM - 5PM</h2>

        {showJobs && (
          <div className="pHomepage-jobs-container">
            <h2>Accepted Jobs:</h2>
            {acceptedJobs && acceptedJobs.length > 0 ? (
              acceptedJobs.map((job) =>
                <p key={job.id}>
                  {job.name}
                </p>)
            ) : (
              <p>No accepted jobs</p>
            )}

            <h2>Rejected Jobs:</h2>
            {rejectedJobs && rejectedJobs.length > 0 ? (
              rejectedJobs.map((job) => <p key={job.id}>{job.name}</p>)
            ) : (
              <p>No rejected jobs</p>
            )}
            <button className="button" onClick={handleClearJobs}>Clear History</button>
          </div>
        )}
      </div>
    </div>
  );
}

// const mapStateToProps = (state) => ({
//   acceptedJobs: state.jobs.acceptedJobs,
//   rejectedJobs: state.jobs.rejectedJobs,
// });

// export default connect(mapStateToProps)(ProfessionalHomescreen);
export default ProfessionalHomescreen;
