import { createSlice } from '@reduxjs/toolkit';
import { getAlbumsCountForAUser, getAllAlbumsForAUser } from '../actions/albumActions';

const initialState = {
  userAlbums: {},
  userAlbum: {}, // Object to store albums for each user
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

        // Update userAlbum object with albums for the specific user
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
  },
});

export default albumsSlice.reducer;
