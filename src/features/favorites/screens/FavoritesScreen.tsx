import React from 'react';
import {useFavorites} from '@app/hooks';
import {RestaurantCardType} from '@app/types';
import {View} from 'native-base';
import {Text} from '@components/Typography';
import {useTranslation} from 'react-i18next';
import {spaces} from '@app/theme';
import {RestaurantFavouriteList} from '../components';
import {RestaurantsInfoCard} from '@components/restaurant';

export const FavoritesScreen = () => {
  const {favorites} = useFavorites();
  const {t} = useTranslation();
  // add empty state
  return (
    <View flex={1} bgColor="bg.primary">
      <Text pl={spaces[3]} fontSize="button">
        {t('favorites')}
      </Text>
      <RestaurantFavouriteList
        data={favorites}
        component={(data: RestaurantCardType) => (
          <RestaurantsInfoCard restaurant={data} />
        )}
        horizontal={false}
      />
    </View>
  );
};
