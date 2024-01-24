import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../api/api';

export const getAlbumsCountForAUser = createAsyncThunk('allAlbums/getAlbumsCountForAUser', async(userId) => {
    try {
        const response = await axiosInstance.get(`/users/${userId}/albums`);
        console.log('all albums', response.data)
        return response.data;
    } catch (error) {
        // Handle any error that occurred during the API call
        throw new Error('Error fetching albums');
    }
});


export const getAllAlbumsForAUser = createAsyncThunk('allAlbums/getAllAlbumsForAUser', async(userId) => {
    try {
        const response = await axiosInstance.get(`/users/${userId}/albums`);
        console.log('all albums', response.data)
        return response.data;
    } catch (error) {
        // Handle any error that occurred during the API call
        throw new Error('Error fetching lalbums');
    }
});

export const getAlbumById = createAsyncThunk('allAlbums/getAlbumById', async(albumId) => {
    try {

        const response = await axiosInstance.get(`/albums/${albumId}`);
        console.log('album by id', response.data)
        return response.data;
    } catch (error) {
        // Handle any error that occurred during the API call
        throw new Error('Error fetching Album by id');
    }
});