// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userInfo: null,
  },
  reducers: {
    setUser: (state, action) => {
      const { name, email } = action.payload;
      state.userInfo = { name, email };
    },
    clearUser: (state) => {
      state.userInfo = null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export const selectUserInfo = (state) => state.user.userInfo;
export default userSlice.reducer;
