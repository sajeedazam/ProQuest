import React, { useState } from 'react';
import './phomepage.css';
//import About from './components/About/about.js';


// Jobs list component
const JobsList = ({ jobs }) => {
  const jobsList = React.createElement('div', {className: 'popup-content'}, 
    React.createElement('h2', null, 'Jobs'),
    jobs.map((job, index) => 
      React.createElement('p', {key: index}, job)
    )
  );

  return jobsList;
};

// Main component
const ProfessionalHomescreen = () => {
  const [showJobs, setShowJobs] = useState(false);
  const jobs = ['Rejected', 'Accepted'];

  const container = React.createElement('div', {className: 'container'}, 
    React.createElement('h1', {className: 'title'}, 'Logged in as a professional'),
    React.createElement('h2', {className: 'info'}, 'Professional Name: John Doe'),
    React.createElement('h2', {className: 'info'}, 'Location of the Professional: Vancouver, Canada'),
    React.createElement('button', {className: 'button', onClick: () => setShowJobs(!showJobs)}, 'Jobs'),
    React.createElement('h2', {className: 'info'}, 'Amount earned: $5000'),
    React.createElement('h2', {className: 'info'}, 'Timings: 9AM - 5PM'),
    showJobs && React.createElement('div', {className: 'popup', onClick: () => setShowJobs(false)}, React.createElement(JobsList, {jobs: jobs}, null))
  );

  return container;
};

export default ProfessionalHomescreen;

/* import React, { useState } from 'react';
import { connect } from 'react-redux';

function ProfessionalHomescreen({ acceptedJobs, rejectedJobs }) {
  const [showJobs, setShowJobs] = useState(false);

  const toggleJobs = () => {
    setShowJobs(!showJobs);
  };

  return (
    <div className="container">
      <h1 className="title">Logged in as a professional</h1>
      <h2 className="info">Professional Name: John Doe</h2>
      <h2 className="info">Location of the Professional: Vancouver, Canada</h2>
      <button className="button" onClick={toggleJobs}>
        {showJobs ? "Hide Jobs" : "Show Jobs"}
      </button>
      <h2 className="info">Amount earned: $5000</h2>
      <h2 className="info">Timings: 9AM - 5PM</h2>

      {showJobs && (
        <div className="jobs-container">
          <h2>Accepted Jobs:</h2>
          {acceptedJobs.length > 0 ? (
            acceptedJobs.map((job) => <p key={job.id}>{job.name}</p>)
          ) : (
            <p>No accepted jobs</p>
          )}

          <h2>Rejected Jobs:</h2>
          {rejectedJobs.length > 0 ? (
            rejectedJobs.map((job) => <p key={job.id}>{job.name}</p>)
          ) : (
            <p>No rejected jobs</p>
          )}
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  acceptedJobs: state.jobReducer.acceptedJobs,
  rejectedJobs: state.jobReducer.rejectedJobs,
});

export default connect(mapStateToProps)(ProfessionalHomescreen);
*/