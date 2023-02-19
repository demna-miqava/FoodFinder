import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    favoritePlaces: [],
  },
  reducers: {
    injectFavorites: (state, action) => {
      state.favoritePlaces = action.payload;
    },
    clearFavorites: state => {
      state.favoritePlaces = [];
    },
    toggleFavorites: (state, action: PayloadAction<string>) => {
      const isPlaceInFavorites = state.favoritePlaces.find(
        place => place === action.payload,
      );
      if (isPlaceInFavorites) {
        state.favoritePlaces = state.favoritePlaces.filter(
          place => place !== action.payload,
        );
      } else {
        state.favoritePlaces.push(action.payload);
      }
    },
  },
});

export const {injectFavorites, clearFavorites, toggleFavorites} =
  favoritesSlice.actions;

export const favoriteReducer = favoritesSlice.reducer;
