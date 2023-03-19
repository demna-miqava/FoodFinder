import React from 'react';
import {useTranslation} from 'react-i18next';
import {Spinner} from 'native-base';
import {Text} from '@components/Typography';
import {Flatlist} from '@components/Flatlist';
import {RestaurantCardWrapper} from '@components/restaurant';
import {spaces} from '@app/theme';
import {RestaurantCardType} from '@type/';

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

const RenderFooter = (isFetchingNextPage?: boolean, hasNextPage?: boolean) => {
  const {t} = useTranslation();

  if (isFetchingNextPage) {
    return renderSpinner();
  } else if (!hasNextPage && hasNextPage !== undefined) {
    return <Text textAlign="center">{t('no_more_restaurants')}</Text>;
  }
  return <></>;
};

export const RestaurantsList = ({
  items,
  component,
  horizontal = false,
  refetchRestaurants,
  isFetchingNextPage,
  hasNextPage,
}: Props) => {
  return (
    <Flatlist
      data={items}
      horizontal={horizontal}
      renderItem={({item}) => {
        const restaurantData = {
          ...item,
          imageRef: item?.photos?.[0]?.photo_reference,
          address: item.vicinity,
        };
        return (
          <RestaurantCardWrapper
            restaurantData={restaurantData}
            component={component}
          />
        );
      }}
      keyExtractor={item => item.place_id}
      onEndReached={() => {
        refetchRestaurants && refetchRestaurants();
      }}
      mb={spaces[5]}
      onEndReachedThreshold={0.5}
      footerComponent={RenderFooter(isFetchingNextPage, hasNextPage)}
    />
  );
};
