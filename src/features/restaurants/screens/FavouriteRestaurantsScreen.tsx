import React from 'react';
import {useFavorites} from '@app/hooks';
import {RestaurantsList} from '../components';
import {View} from 'native-base';
import {Text} from '@components/Typography';
import {spaces} from '@app/theme';
import {useTranslation} from 'react-i18next';

export const FavouriteRestaurantsScreen = () => {
  const {favorites} = useFavorites();
  const {t} = useTranslation();
  return (
    <View flex={1} background="bg.primary">
      <Text mx={spaces[3]} fontSize="body">
        {t('favorites')}
      </Text>
      <RestaurantsList items={favorites} />
    </View>
  );
};
