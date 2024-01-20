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


export const getPhotoById = createAsyncThunk('photos/getPhotoById', async(photoId) => {
    try {
        const response = await axiosInstance.get(`/photos/${photoId}`);
        console.log('photo by id', response.data)
        return response.data;
    } catch (error) {
        // Handle any error that occurred during the API call
        throw new Error('Error fetching Photo by id');
    }
});

export const updatePhotoTitle = createAsyncThunk('photos/updatePhotoTitle', async ({ photoId, newTitle }) => {
    try {
        const response = await axiosInstance.patch(`/photos/${photoId}`, { title: newTitle });
        console.log('Updated photo title', response.data);
        return response.data;
    } catch (error) {
        // Handle any error that occurred during the API call
        throw new Error('Error updating photo title');
    }
});
