import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlices';
import allUsersReducer from './slices/allUsersSlices';
import albumsReducer from './slices/albumSlices';
import photosReducer from './slices/photoSlices';

export const store = configureStore({
    reducer: {
       user: userReducer,
       allUsers: allUsersReducer,
       albums: albumsReducer,
       photos: photosReducer
    },
});

export default store;