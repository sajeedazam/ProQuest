import React from 'react';
import Jobs from '../Jobs/jobs.js';

function JobsList() {
  const jobs = [
    { name: 'Hair cut', id: '1' },
    { name: 'SPA', id: '2' },
    { name: 'Pedicure', id: '3' }
  ];

  return <Jobs jobs={jobs} />;
}

export default JobsList;