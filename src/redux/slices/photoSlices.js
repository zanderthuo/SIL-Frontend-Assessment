import { createSlice } from '@reduxjs/toolkit';
import { getPhotosForAnAlbum } from '../actions/photoActions';

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
    //   .addCase(getAllAlbumsForAUser.pending, state => {
    //     state.loading = true
    //   })
    //   .addCase(getAllAlbumsForAUser.fulfilled, (state, action) => {
    //     state.loading = false
    //     state.userAlbums[action.meta.arg] = action.payload;
    //     state.error = ''
    //   })
    //   .addCase(getAllAlbumsForAUser.rejected, (state, action) => {
    //     state.loading = false
    //     state.userAlbums = {}
    //     state.error = action.error.message
    //   })
    //   .addCase(getAlbumById.pending, state => {
    //     state.loading = true
    //   })
    //   .addCase(getAlbumById.fulfilled, (state, action) => {
    //     state.loading = false
    //     state.album = action.payload
    //     state.error = ''
    //   })
    //   .addCase(getAlbumById.rejected, (state, action) => {
    //     state.loading = false
    //     state.album = {}
    //     state.error = action.error.message
    //   })
  },
});

export default photosSlice.reducer;
