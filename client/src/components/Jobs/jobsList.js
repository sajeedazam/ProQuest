import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Jobs from '../Jobs/jobs.js';
import { getNotifsAsync } from '../../redux/notifications/thunks.js';
import { useSelector } from 'react-redux';

function JobsList() {

  const dispatch = useDispatch();
  const jobs = useSelector(state => state.jobs.items);

  useEffect(() => {
    dispatch(getNotifsAsync());
  }, []);

  return <Jobs jobs={jobs} />;
}

export default JobsList;