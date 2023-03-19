import React from 'react';
import {VStack} from 'native-base';
import {useTranslation} from 'react-i18next';
import {Text} from '@components/Typography';
import {RestaurantsList} from './RestaurantsList';
import {MiniRestaurantCard} from './MiniRestaurantCard';
import {RestaurantCardType} from '@app/types';
import {spaces} from '@app/theme';

interface Props {
  favorites: RestaurantCardType[];
}

export const MiniFavoritesBar = ({favorites}: Props) => {
  const {t} = useTranslation();

  return (
    <VStack space={2}>
      <Text mx={spaces[3]} fontSize="body">
        {t('favorites')}
      </Text>
      <RestaurantsList
        items={favorites}
        horizontal={true}
        component={(data: RestaurantCardType) => {
          return <MiniRestaurantCard restaurant={data} />;
        }}
      />
    </VStack>
  );
};
