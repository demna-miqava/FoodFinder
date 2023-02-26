import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userInfo: null,
  },
  reducers: {
    logoutUser: state => {
      state.userInfo = null;
    },
  },
});

export const userReducer = userSlice.reducer;

export const {logoutUser} = userSlice.actions;
