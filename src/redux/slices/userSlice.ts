import {User} from '@app/types/';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState: {userInfo: User | null} = {
  userInfo: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logoutUser: state => {
      state.userInfo = null;
    },
    authenticate: (state, action: PayloadAction<User>) => {
      state.userInfo = action.payload;
    },
  },
});

export const userReducer = userSlice.reducer;

export const {logoutUser, authenticate} = userSlice.actions;
