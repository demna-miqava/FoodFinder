import {combineReducers} from '@reduxjs/toolkit';
import {favoriteReducer, userReducer} from './slices';

export const rootReducer = combineReducers({
  favorites: favoriteReducer,
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
