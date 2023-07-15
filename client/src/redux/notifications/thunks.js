import { createAsyncThunk } from "@reduxjs/toolkit";
import jobService from './services'


export const getJobsAsync = createAsyncThunk(
    'GET_JOBS',
    async () => {
        try {
            return await jobService.getJobs();
        } catch (error) {
            throw new Error('Failed to retrieve jobs from the database');
        }
    }
);

export const getNotifsAsync = createAsyncThunk(
    'GET_JOBS',
    async () => {
        try {
            return await jobService.getNotifs();
        } catch (error) {
            throw new Error('Failed to retrieve jobs from the database');
        }
    }
);

export const addJobsAsync = createAsyncThunk(
    'ADD_ITEM',
    async (job) => {
        try {
            return await jobService.addJobs(job.category, job.name, job.time, job.customerName, job.phone);
        } catch (error) {
            throw new Error('Failed to add job to the database');
        }
    }
);

export const deleteItemAsync = createAsyncThunk(
    'DELETE_ITEM',
    async (itemId) => {
        try {
            return await jobService.deleteJobs(itemId);
        } catch (error) {
            throw new Error('Failed to delete');
        }
    }
);


export const acceptJobAsync = createAsyncThunk(
    'ACCEPT_JOB',
    async (jobId) => {
        try {
            const response = await fetch(`http://localhost:5001/job-list/${jobId}`, {
                method: 'DELETE'
            });

            if (!response.ok) {
                throw new Error('Failed to delete job from the database');
            }

            return jobId;
        } catch (error) {
            throw new Error('Failed to delete job from the database');
        }
    }
);

export const rejectJobAsync = createAsyncThunk(
    'REJECT_JOB',
    async (jobId) => {
        try {
            const response = await fetch(`http://localhost:5001/job-list/${jobId}`, {
                method: 'DELETE'
            });

            if (!response.ok) {
                throw new Error('Failed to delete job from the database');
            }

            return jobId;
        } catch (error) {
            throw new Error('Failed to delete job from the database');
        }
    }
);

export const checkoutAsync = createAsyncThunk(
  'CHECKOUT',
  async () => {
    try {
      const response = await jobService.transferData();
      if (!response.ok) {
        throw new Error('Checkout failed');
      }
      return await response.json();
    } catch (error) {
        throw new Error('Failed to delete job from the database');
    }
  }
);

