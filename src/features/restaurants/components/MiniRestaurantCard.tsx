import React from 'react';
import {Image} from '@components/Image';
import {RestaurantCardType} from '@app/types';
import {Pressable, View, VStack} from 'native-base';
import {Text} from '@components/Typography';
import {useNavigation} from '@react-navigation/native';

export const MiniRestaurantCard = ({
  restaurant,
}: {
  restaurant: RestaurantCardType;
}) => {
  const navigation = useNavigation<any>();
  const {photos, name} = restaurant;

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
            uri: photos[0],
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
