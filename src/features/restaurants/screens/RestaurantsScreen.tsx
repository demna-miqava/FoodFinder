import {FlatList, Text, View, VStack} from 'native-base';
import React, {useState} from 'react';
import {CardSkeleton} from '@components/Skeleton';
import {MakeRequestWrapper} from '@app/containers';
import {RestaurantCardType} from '@app/types';
import {spaces} from '@app/theme';
import {
  MiniRestaurantCard,
  RestaurantSearch,
  RestaurantsInfoCard,
  RestaurantsList,
} from '../components/';
import {useFavorites} from '@hooks/';
import {useTranslation} from 'react-i18next';
import {useRestaurant} from '../hooks';

// move this to separate file
const dummyLoadingData = [{id: '1'}, {id: '2'}, {id: '3'}];

export const RestaurantsScreen = () => {
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const {
    setSearchCity,
    restaurantsData,
    isLoading,
    isError,
    loadMore,
    isFetchingNextPage,
    hasNextPage,
  } = useRestaurant();
  const {favorites} = useFavorites();
  const {t} = useTranslation();
  console.log(restaurantsData);
  return (
    <View flex={1} padding={spaces[3]}>
      <RestaurantSearch
        setSearchCity={setSearchCity}
        setIsFavoritesOpen={setIsFavoritesOpen}
        isFavoritesOpen={isFavoritesOpen}
      />
      {isFavoritesOpen && (
        <VStack space={2}>
          <Text mx={spaces[3]} fontSize="body">
            {t('favorites')}
          </Text>
          <RestaurantsList
            items={favorites}
            horizontal={true}
            component={(data: RestaurantCardType) => {
              return <MiniRestaurantCard restaurant={data} />;
            }}
          />
        </VStack>
      )}
      <View>
        <MakeRequestWrapper
          data={restaurantsData}
          isFetching={isLoading}
          isEmpty={restaurantsData?.length === 0}
          renderLoader={() => {
            return (
              <FlatList
                data={dummyLoadingData}
                renderItem={() => <CardSkeleton />}
                keyExtractor={item => item.id}
              />
            );
          }}
          isError={isError}
          renderData={(items: (RestaurantCardType & {vicinity: string})[]) => {
            return (
              <RestaurantsList
                refetchRestaurants={loadMore}
                items={items}
                isFetchingNextPage={isFetchingNextPage}
                hasNextPage={hasNextPage}
                component={(data: RestaurantCardType) => (
                  <RestaurantsInfoCard restaurant={data} />
                )}
              />
            );
          }}
        />
      </View>
    </View>
  );
};
