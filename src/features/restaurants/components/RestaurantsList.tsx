import React from 'react';
import {spaces} from '@app/theme';
import {FlatList, Spinner} from 'native-base';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RestaurantCardType} from '@app/types';
import {FadeInView} from '@app/components/animations';
import {Text} from '@components/Typography';
import {useTranslation} from 'react-i18next';

type Props = {
  items: RestaurantCardType[];
  component: any;
  horizontal?: boolean;
  refetchRestaurants?: any;
  isFetchingNextPage?: boolean;
  hasNextPage?: boolean;
};

const renderSpinner = () => {
  return <Spinner size="lg" />;
};

const RenderFooter = (
  isFetchingNextPage?: boolean,
  hasNextPage?: boolean,
): any => {
  const {t} = useTranslation();

  if (isFetchingNextPage) {
    return renderSpinner();
  } else if (!hasNextPage && hasNextPage !== undefined) {
    return <Text textAlign="center">{t('no_more_restaurants')}</Text>;
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
      ListFooterComponent={RenderFooter(isFetchingNextPage, hasNextPage)}
    />
  );
};
