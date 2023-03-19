import React from 'react';
import {spaces} from '@app/theme';
import {FlatList, Spinner, Text} from 'native-base';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RestaurantCardType} from '@app/types';
import {FadeInView} from '@app/components/animations';

type Props = {
  items: (RestaurantCardType & {vicinity: string})[];
  component: any;
  horizontal?: boolean;
  refetchRestaurants?: any;
  isFetchingNextPage?: boolean;
  hasNextPage?: boolean;
};

const renderSpinner = () => {
  return <Spinner size="md" />;
};

const renderFooter = (
  isFetchingNextPage?: boolean,
  hasNextPage?: boolean,
): any => {
  if (isFetchingNextPage) {
    return renderSpinner();
  } else if (!hasNextPage) {
    return <Text>oops no more restaurants</Text>;
  }
  return null;
};

export const RestaurantsList = ({
  items,
  component,
  horizontal = false,
  refetchRestaurants,
  isFetchingNextPage,
  hasNextPage,
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
          imageRef: item?.photos?.[0]?.photo_reference,
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
      onEndReached={() => {
        refetchRestaurants && refetchRestaurants();
      }}
      onEndReachedThreshold={0.5}
      ListFooterComponent={renderFooter(isFetchingNextPage, hasNextPage)}
    />
  );
};
