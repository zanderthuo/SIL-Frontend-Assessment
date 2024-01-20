import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../api/api';

export const getAlbumsForAUser = createAsyncThunk('allAlbums/getAlbumsForAUser', async(userId) => {
    try {
        const response = await axiosInstance.get(`/users/${userId}/albums`);
        console.log('all albums', response.data)
        return response.data;
    } catch (error) {
        // Handle any error that occurred during the API call
        throw new Error('Error fetching lalbums');
    }
});