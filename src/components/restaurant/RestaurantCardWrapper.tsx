import React from 'react';
import {FadeInView} from '@components/animations';
import {RestaurantCardType} from '@app/types';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';

interface Props {
  restaurantData: RestaurantCardType;
  component: any;
}
export const RestaurantCardWrapper = ({component, restaurantData}: Props) => {
  const navigation = useNavigation<any>();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('RestaurantDetails', {
          restaurant: restaurantData,
        })
      }>
      <FadeInView>{component(restaurantData)}</FadeInView>
    </TouchableOpacity>
  );
};
