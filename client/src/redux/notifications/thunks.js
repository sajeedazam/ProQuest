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
            return await jobService.addJobs(job.category, job.name, job.time, job.customerName, job.phone, job.price);
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

export const deleteCartItemAsync = createAsyncThunk(
    'DELETE_ITEM',
    async (itemId) => {
        try {
            return await jobService.deleteCart(itemId);
        } catch (error) {
            throw new Error('Failed to delete');
        }
    }
);

export const acceptAsync = createAsyncThunk(
    'ACCEPT',
    async (jobId) => {
        try {
            const response = await jobService.acceptTransfer(jobId);
            if (!response.ok) {
                throw new Error('Transfer failed');
            }
            return await response.json();
        } catch (error) {
            throw new Error('Failed to transfer job from the database');
        }
    }
);

export const getAcceptedAsync = createAsyncThunk(
    'GET_ACCEPTS',
    async () => {
        try {
            return await jobService.getAccepts();
        } catch (error) {
            throw new Error('Failed to retrieve jobs from the database');
        }
    }
);

export const completedAsync = createAsyncThunk(
    'COMPLETE',
    async (jobId) => {
        try {
            const response = await jobService.completedTransfer(jobId);
            if (!response.ok) {
                throw new Error('Transfer failed');
            }
            return await response.json();
        } catch (error) {
            throw new Error('Failed to transfer job from the database');
        }
    }
);

export const getCompletedAsync = createAsyncThunk(
    'GET_COMPLETES',
    async () => {
        try {
            return await jobService.getComplete();
        } catch (error) {
            throw new Error('Failed to retrieve jobs from the database');
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

export const getAmountAsync = createAsyncThunk(
    'GET_AMOUNT',
    async () => {
        try {
            return await jobService.getAmount();
        } catch (error) {
            throw new Error('Failed to get from the database');
        }
    }
);




