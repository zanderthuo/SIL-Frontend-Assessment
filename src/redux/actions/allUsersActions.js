import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../api/api';

export const getAllUsers = createAsyncThunk('allUsers/getAllUsers', async() => {
    try {

        const response = await axiosInstance.get('/users');
        console.log('all users', response.data)
        return response.data;
    } catch (error) {
        // Handle any error that occurred during the API call
        throw new Error('Error fetching users');
    }
});

export const getUserById = createAsyncThunk('allUsers/getUserById', async(userId) => {
    try {

        const response = await axiosInstance.get(`/users/${userId}`);
        console.log('all users', response.data)
        return response.data;
    } catch (error) {
        // Handle any error that occurred during the API call
        throw new Error('Error fetching user by id');
    }
});