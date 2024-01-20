import { createSlice } from '@reduxjs/toolkit';
import { getAlbumsCountForAUser, getAllAlbumsForAUser, getAlbumById } from '../actions/albumActions';

const initialState = {
  userAlbums: {},
  userAlbum: {},
  album:{}, // Object to store albums for each user
  loading: false,
  error: null,
};

const albumsSlice = createSlice({
  name: 'allAlbums',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAlbumsCountForAUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAlbumsCountForAUser.fulfilled, (state, action) => {
        state.loading = false;
        state.userAlbum[action.meta.arg] = action.payload;
        state.error = '';
      })
      .addCase(getAlbumsCountForAUser.rejected, (state, action) => {
        state.loading = false;
        state.userAlbum = {};
        state.error = action.error.message;
      })
      .addCase(getAllAlbumsForAUser.pending, state => {
        state.loading = true
      })
      .addCase(getAllAlbumsForAUser.fulfilled, (state, action) => {
        state.loading = false
        state.userAlbums[action.meta.arg] = action.payload;
        state.error = ''
      })
      .addCase(getAllAlbumsForAUser.rejected, (state, action) => {
        state.loading = false
        state.userAlbums = {}
        state.error = action.error.message
      })
      .addCase(getAlbumById.pending, state => {
        state.loading = true
      })
      .addCase(getAlbumById.fulfilled, (state, action) => {
        state.loading = false
        state.album = action.payload
        state.error = ''
      })
      .addCase(getAlbumById.rejected, (state, action) => {
        state.loading = false
        state.album = {}
        state.error = action.error.message
      })
  },
});

export default albumsSlice.reducer;
