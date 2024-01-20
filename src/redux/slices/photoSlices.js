import { createSlice } from '@reduxjs/toolkit';
import { 
  getPhotosForAnAlbum,
  getPhotoById,
  updatePhotoTitle
 } from '../actions/photoActions';

const initialState = {
  photos: {},
  photo: {},
  album:{}, // Object to store albums for each user
  loading: false,
  error: null,
};

const photosSlice = createSlice({
  name: 'photos',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getPhotosForAnAlbum.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPhotosForAnAlbum.fulfilled, (state, action) => {
        state.loading = false;
        state.photos[action.meta.arg] = action.payload;
        state.error = '';
      })
      .addCase(getPhotosForAnAlbum.rejected, (state, action) => {
        state.loading = false;
        state.photos = {};
        state.error = action.error.message;
      })
      .addCase(getPhotoById.pending, state => {
        state.loading = true
      })
      .addCase(getPhotoById.fulfilled, (state, action) => {
        state.loading = false
        state.photo = action.payload
        state.error = ''
      })
      .addCase(getPhotoById.rejected, (state, action) => {
        state.loading = false
        state.photo = {}
        state.error = action.error.message
      })
      .addCase(updatePhotoTitle.pending, state => {
        state.loading = true
      })
      .addCase(updatePhotoTitle.fulfilled, (state, action) => {
        state.loading = false
        state.photo = action.payload
        state.error = ''
      })
      .addCase(updatePhotoTitle.rejected, (state, action) => {
        state.loading = false
        state.photo = {}
        state.error = action.error.message
      })
  },
});

export default photosSlice.reducer;
