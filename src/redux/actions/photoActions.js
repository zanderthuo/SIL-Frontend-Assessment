import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../api/api';

export const getPhotosForAnAlbum = createAsyncThunk('photos/getAlbumsCountForAUser', async(albumId) => {
    try {
        const response = await axiosInstance.get(`/albums/${albumId}/photos`);
        console.log('all photos', response.data)
        return response.data;
    } catch (error) {
        // Handle any error that occurred during the API call
        throw new Error('Error fetching photos');
    }
});