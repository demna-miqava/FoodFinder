import {createSlice} from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    favoritePlaces: [],
  },
  reducers: {
    loadFavorites: (state, action) => {},
    clearFavorites: state => {},
    toggleFavorites: (state, action) => {},
  },
});

export const {loadFavorites, clearFavorites, toggleFavorites} =
  favoritesSlice.actions;

export const favoriteReducer = favoritesSlice.reducer;
