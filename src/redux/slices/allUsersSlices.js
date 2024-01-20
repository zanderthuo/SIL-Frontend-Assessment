import { createSlice } from '@reduxjs/toolkit';
import {getAllUsers, getUserById} from '../actions/allUsersActions'

const initialState = {
  allUsers: [],
  user: {},
  loading: false,
  error: null,
};


const allUsersSlice = createSlice({
  name: 'allUsers',
  initialState,
  extraReducers: builder => {
    builder
    .addCase(getAllUsers.pending, state => {
      state.loading = true
    })
    .addCase(getAllUsers.fulfilled, (state, action) => {
      state.loading = false
      state.allUsers = action.payload
      state.error = ''
    })
    .addCase(getAllUsers.rejected, (state, action) => {
      state.loading = false
      state.allUsers = []
      state.error = action.error.message
    })
    .addCase(getUserById.pending, state => {
      state.loading = true
    })
    .addCase(getUserById.fulfilled, (state, action) => {
      state.loading = false
      state.user = action.payload
      state.error = ''
    })
    .addCase(getUserById.rejected, (state, action) => {
      state.loading = false
      state.user = {}
      state.error = action.error.message
    })
  } 
})

export default allUsersSlice.reducer


