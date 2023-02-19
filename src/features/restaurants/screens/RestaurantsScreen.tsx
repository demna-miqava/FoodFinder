import {FlatList, View} from 'native-base';
import React from 'react';
import {CardSkeleton} from '@components/Skeleton';
import {MakeRequestWrapper} from '@app/containers';
import {RestaurantCardType} from '@app/types';
import {spaces} from '@app/theme';
import {RestaurantSearch, RestaurantsList} from '../components/';
import {useRestaurant} from '@hooks/';

// move this to separate file
const dummyLoadingData = [{id: '1'}, {id: '2'}, {id: '3'}];

export const RestaurantsScreen = () => {
  const {setSearchCity, restaurantsData, isLoading, isError} = useRestaurant();
  return (
    <View flex={1} padding={spaces[3]}>
      <RestaurantSearch setSearchCity={setSearchCity} />
      <View>
        <MakeRequestWrapper
          data={restaurantsData?.results}
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
            return <RestaurantsList items={items} />;
          }}
        />
      </View>
    </View>
  );
};
