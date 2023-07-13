import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Jobs from '../Jobs/jobs.js';
import { getJobsAsync } from '../../redux/notifications/thunks.js';
import { useSelector } from 'react-redux';

function JobsList() {

  const dispatch = useDispatch();
  const jobs = useSelector(state => state.jobs.jobsReducer);
  // const jobs = [
  //   { name: 'Haircut' },
  //   { name: 'SPA'},
  //   { name: 'Pedicure'}
  // ];

// useEffect(() => {
//     dispatch(getJobsAsync());
// }, []);

  return <Jobs jobs={jobs} />;
}

export default JobsList;