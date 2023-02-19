import React from 'react';
import {spaces} from '@app/theme';
import {FlatList} from 'native-base';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RestaurantsInfoCard} from './RestaurantInfoCard';
import {RestaurantCardType} from '@app/types';

type Props = {
  items: (RestaurantCardType & {vicinity: string})[];
};

export const RestaurantsList = ({items}: Props) => {
  const {navigation} = useNavigation<any>();
  return (
    <FlatList
      data={items}
      showsVerticalScrollIndicator={false}
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
            <RestaurantsInfoCard restaurant={restaurantData} />
          </TouchableOpacity>
        );
      }}
      keyExtractor={item => item.place_id}
    />
  );
};
