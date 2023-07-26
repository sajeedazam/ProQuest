import React, { useState } from 'react';
import './phomepage.css';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
// import { clearJobs } from '../../redux/notifications/reducer';
import '../Chat/chat.css'
import '../Chat/chat'
import { completedAsync, getAcceptedAsync, getCompletedAsync } from '../../redux/notifications/thunks';

function ProfessionalHomescreen() {
  const [showJobs, setShowJobs] = useState(false);
  const [showCompleted, setShowCompleted] = useState(false);
  const dispatch = useDispatch();

  const completedJobs = useSelector(state => state.jobs.completes);
  const acceptedJobs = useSelector(state => state.jobs.accepts);
  const earnedAmount = useSelector(state => state.jobs.earnedAmount);
  const [localJobs, setLocalJobs] = useState(completedJobs);
  const [localAccepts, setLocalAccepts] = useState(acceptedJobs);
  
  useEffect(() => {
    dispatch(getAcceptedAsync());
    dispatch(getCompletedAsync());
  }, []);

  let navigate = useNavigate();

  const toggleJobs = () => {
    setShowJobs(!showJobs);
  };

  const toggleCompleted = () => {
    setShowCompleted(!showCompleted);
  };

  // const handleClearJobs = () => {
  //   dispatch(clearJobs());
  // };

  const handleCompletedJob = async (job) => {
    try {
      await dispatch(completedAsync(job));
      await setLocalJobs(dispatch(getCompletedAsync()));
      await setLocalAccepts(dispatch(getAcceptedAsync()));
    } catch (error) {
      console.error(error);
    }
  };

  const handleChatButtonClick = () => {
    navigate('/chat');
  };

  return (
    <div className="pHomepage-body">
      <div className="pHomepage-image"></div>
      <div className="pHomepage-container">
        <Link to="/jobs" className='mt-3'>Notifications</Link>
        <h1 className="pHomepage-title">Logged in as a professional</h1>
        <h2 className="pHomepage-info">Professional Name: John Doe</h2>
        <h2 className="pHomepage-info">Location of the Professional: Vancouver, Canada</h2>
        <h2 className="pHomepage-info">Amount earned: ${earnedAmount}</h2>
        <h2 className="pHomepage-info">Timings: 9AM - 5PM</h2>
        
        <button className="button" onClick={toggleJobs}>
          {showJobs ? "Hide Jobs" : "Upcoming Jobs"}
        </button>
        {showJobs && (

          <div className="pHomepage-jobs-container">
            <h2>Accepted Jobs:</h2>
            {acceptedJobs && acceptedJobs.length > 0 ? (
              acceptedJobs.map((job, index) => (
                <p key={index}>
                  <p><strong>Job Name:</strong> {job.name}</p>
                  <p><strong>Customer Name:</strong> {job.customerName}</p>
                  <p><strong>Phone:</strong> {job.phone}</p>
                  <button onClick={() => handleCompletedJob(job._id)}>Completed</button>
                </p>))
            ) : (
              <p>No accepted jobs</p>
            )}

            {/* <button className="button" onClick={handleClearJobs}>Clear History</button> */}
          </div>

        )}
        <button className="button" onClick={toggleCompleted}>
          {showCompleted ? "Hide Jobs" : "Completed Jobs"}
        </button>

        {showCompleted && (

          <div className="pHomepage-jobs-container">
            <h2>Completed Jobs:</h2>
            {completedJobs && completedJobs.length > 0 ? (
              completedJobs.map((job, index) => (
                <p key={index}>
                  <p><strong>Job Name:</strong> {job.name}</p>
                  <p><strong>Customer Name:</strong> {job.customerName}</p>
                  <p><strong>Phone:</strong> {job.phone}</p>
                </p>))
            ) : (
              <p>No completed jobs</p>
            )}

            {/* <button className="button" onClick={handleClearJobs}>Clear History</button> */}
          </div>
        )}
        <button className="button" onClick={handleChatButtonClick}>
          Chat with Customer
        </button>
      </div>
    </div>
  );
}

export default ProfessionalHomescreen;

