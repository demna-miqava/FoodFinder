import React from 'react';
import {Image} from '@components/Image';
import {RestaurantCardType} from '@app/types';
import {Pressable, VStack} from 'native-base';
import {Text} from '@components/Typography';
import {useNavigation} from '@react-navigation/native';
import {getImageUrl} from '@app/helpers';

export const MiniRestaurantCard = ({
  restaurant,
}: {
  restaurant: RestaurantCardType;
}) => {
  const navigation = useNavigation<any>();
  const {imageRef, name} = restaurant;

  return (
    <Pressable
      onPress={() => {
        navigation.push('RestaurantDetails', {
          restaurant,
        });
      }}>
      <VStack w="120px" alignItems="center">
        <Image
          source={{
            uri: getImageUrl(imageRef),
          }}
          style={styles.img}
        />
        <Text textAlign="center">{name}</Text>
      </VStack>
    </Pressable>
  );
};

const styles = {
  img: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
};
