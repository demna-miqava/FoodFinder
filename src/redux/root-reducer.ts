import {combineReducers} from '@reduxjs/toolkit';
import {favoriteReducer} from './slices';

export const rootReducer = combineReducers({
  favorites: favoriteReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
