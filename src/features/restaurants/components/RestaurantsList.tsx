import React from 'react';
import {spaces} from '@app/theme';
import {FlatList} from 'native-base';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RestaurantCardType} from '@app/types';

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
          photos: [
            'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
          ],
          address: item.vicinity,
        };
        return (
          <TouchableOpacity
            onPress={() =>
              navigation.push('RestaurantDetails', {
                restaurant: restaurantData,
              })
            }>
            {component && component(restaurantData)}
          </TouchableOpacity>
        );
      }}
      keyExtractor={item => item.place_id}
    />
  );
};
