import React from 'react';
import {View} from 'native-base';
import {useRoute} from '@react-navigation/native';
import {RestaurantsInfoCard} from '../components';

export const RestaurantsDetailsScreen = () => {
  const {params} = useRoute<any>();
  const {restaurant} = params;

  return (
    <View>
      <RestaurantsInfoCard restaurant={restaurant} />
    </View>
  );
};
