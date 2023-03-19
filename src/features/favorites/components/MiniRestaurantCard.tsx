import React from 'react';
import {Image} from '@components/Image';
import {RestaurantCardType} from '@app/types';
import {VStack} from 'native-base';
import {Text} from '@components/Typography';
import {getImageUrl} from '@app/helpers';

export const MiniRestaurantCard = ({
  restaurant,
}: {
  restaurant: RestaurantCardType;
}) => {
  const {imageRef, name} = restaurant;

  return (
    <VStack w="120px" alignItems="center">
      <Image
        source={{
          uri: getImageUrl(imageRef),
        }}
        style={styles.img}
      />
      <Text textAlign="center">{name}</Text>
    </VStack>
  );
};

const styles = {
  img: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
};
