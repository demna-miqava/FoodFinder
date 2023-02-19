import React from 'react';
import {useFavorites} from '@app/hooks';
import {Text} from '@components/Typography';

type Props = {};

export const FavouriteRestaurantsScreen = (props: Props) => {
  const {favorites} = useFavorites();
  return <Text>Favorites</Text>;
};
