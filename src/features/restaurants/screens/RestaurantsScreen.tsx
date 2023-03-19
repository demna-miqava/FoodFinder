import {FlatList, View} from 'native-base';
import React, {useState} from 'react';
import {CardSkeleton} from '@components/Skeleton';
import {MakeRequestWrapper} from '@app/containers';
import {RestaurantCardType} from '@app/types';
import {spaces} from '@app/theme';
import {RestaurantSearch, RestaurantsList} from '../components/';
import {useFavorites} from '@hooks/';
import {useRestaurant} from '../hooks';
import {MiniFavoritesBar} from '@features/favorites/components';
import {RestaurantsInfoCard} from '@components/restaurant';

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

  return (
    <View flex={1} padding={spaces[3]}>
      <RestaurantSearch
        setSearchCity={setSearchCity}
        setIsFavoritesOpen={setIsFavoritesOpen}
        isFavoritesOpen={isFavoritesOpen}
      />
      {isFavoritesOpen && <MiniFavoritesBar favorites={favorites} />}
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
          renderData={(items: RestaurantCardType[]) => {
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
