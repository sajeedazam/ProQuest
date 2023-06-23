import React from 'react';
import Jobs from '../Jobs/jobs.js';

function JobsList() {
  const jobs = [
    { name: 'Hair cut' },
    { name: 'SPA'},
    { name: 'Pedicure'}
  ];

  return <Jobs jobs={jobs} />;
}

export default JobsList;