import {userStorage} from '@app/helpers';
import {RestaurantCardType} from '@app/types';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    favoritePlaces: [],
  },
  reducers: {
    hydrate: (state, action) => {
      state.favoritePlaces = JSON.parse(action.payload);
    },
    clearFavorites: state => {
      state.favoritePlaces = [];
    },
    toggleFavorites: (state, action: PayloadAction<RestaurantCardType>) => {
      const isPlaceInFavorites = state.favoritePlaces.find(
        (place: RestaurantCardType) =>
          place.place_id === action.payload.place_id,
      );
      if (isPlaceInFavorites) {
        state.favoritePlaces = state.favoritePlaces.filter(
          (place: RestaurantCardType) =>
            place.place_id !== action.payload.place_id,
        );
      } else {
        state.favoritePlaces.push(action.payload);
      }
      userStorage.setFavorites(state.favoritePlaces);
    },
  },
});

export const {hydrate, clearFavorites, toggleFavorites} =
  favoritesSlice.actions;

export const favoriteReducer = favoritesSlice.reducer;
