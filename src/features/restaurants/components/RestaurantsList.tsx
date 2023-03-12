import React from 'react';
import {spaces} from '@app/theme';
import {FlatList} from 'native-base';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RestaurantCardType} from '@app/types';
import {FadeInView} from '@app/components/animations';
import {mockImages} from '@app/api/restaurants/mock';

type Props = {
  items: (RestaurantCardType & {vicinity: string})[];
  component: any;
  horizontal?: boolean;
};

export const RestaurantsList = ({
  items,
  component,
  horizontal = false,
}: Props) => {
  const navigation = useNavigation<any>();
  return (
    <FlatList
      data={items}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      horizontal={horizontal}
      mb={spaces[4] + 4}
      renderItem={({item}) => {
        const restaurantData = {
          ...item,
          imageRef: item.photos[0]?.photo_reference || mockImages[0],
          address: item.vicinity,
        };
        return (
          <TouchableOpacity
            onPress={() =>
              navigation.push('RestaurantDetails', {
                restaurant: restaurantData,
              })
            }>
            <FadeInView>{component && component(restaurantData)}</FadeInView>
          </TouchableOpacity>
        );
      }}
      keyExtractor={item => item.place_id}
    />
  );
};
