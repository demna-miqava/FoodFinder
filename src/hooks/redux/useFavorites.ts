import {
  clearFavorites as clearFavs,
  hydrate as injectFavs,
  toggleFavorites as toggleFavs,
  useAppDispatch,
  useAppSelector,
} from '@app/redux';
import {useCallback} from 'react';

export const useFavorites = () => {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(state => state.favorites.favoritePlaces);

  const clearFavorites = useCallback(() => {
    dispatch(clearFavs());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const hydrate = useCallback((data: string[]) => {
    dispatch(injectFavs(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleFavorites = useCallback((data: string) => {
    dispatch(toggleFavs(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    favorites,
    clearFavorites,
    hydrate,
    toggleFavorites,
  };
};
