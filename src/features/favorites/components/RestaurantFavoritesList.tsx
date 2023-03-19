import React from 'react';
import {spaces} from '@app/theme';
import {RestaurantCardType} from '@app/types';
import {Flatlist} from '@components/Flatlist';
import {RestaurantCardWrapper} from '@components/restaurant';

interface Props {
  data: RestaurantCardType[];
  component: any;
  horizontal: boolean;
}

export const RestaurantFavouriteList = ({
  data,
  component,
  horizontal,
}: Props) => {
  return (
    <Flatlist
      data={data}
      horizontal={horizontal}
      renderItem={({item}) => {
        const restaurantData = {
          ...item,
          imageRef: item?.photos?.[0]?.photo_reference,
        };
        return (
          <RestaurantCardWrapper
            restaurantData={restaurantData}
            component={component}
          />
        );
      }}
      keyExtractor={item => item.place_id}
      mb={spaces[2]}
    />
  );
};
