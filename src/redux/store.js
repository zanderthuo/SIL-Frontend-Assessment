import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlices';
import allUsersReducer from './slices/allUsersSlices';
import albumsReducer from './slices/albumSlices';

export const store = configureStore({
    reducer: {
       user: userReducer,
       allUsers: allUsersReducer,
       albums: albumsReducer
    },
});

export default store;