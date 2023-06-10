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
  const jobs = ['Job 1', 'Job 2']; // Replace this with real data

  const container = React.createElement('div', {className: 'container'}, 
    React.createElement('h1', {className: 'title'}, 'Logged in as a professional'),
    React.createElement('h2', {className: 'info'}, 'Professional Name: John Doe'),
    React.createElement('h2', {className: 'info'}, 'Location of the Professional: New York, USA'),
    React.createElement('button', {className: 'button', onClick: () => setShowJobs(!showJobs)}, 'Jobs'),
    React.createElement('h2', {className: 'info'}, 'Amount earned: $5000'),
    React.createElement('h2', {className: 'info'}, 'Timings: 9AM - 5PM'),
    showJobs && React.createElement('div', {className: 'popup', onClick: () => setShowJobs(false)}, React.createElement(JobsList, {jobs: jobs}, null))
  );

  return container;
};

export default ProfessionalHomescreen;
