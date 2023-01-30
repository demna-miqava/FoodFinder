import {FlatList, View} from 'native-base';
import React from 'react';
import {RestaurantsInfoCard} from '../components/RestaurantInfoCard';
import {CardSkeleton} from '@components/Skeleton';
import {MakeRequestWrapper} from '@app/containers';
import {RestaurantCardType} from '@app/types';
import {spaces} from '@app/theme';
import {RestaurantSearch} from '../components/RestaurantSearch';
import {useRestaurant} from '@hooks/';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

// move this to separate file
const dummyLoadingData = [{id: '1'}, {id: '2'}, {id: '3'}];

export const RestaurantsScreen = () => {
  const {setSearchCity, restaurantsData, isLoading, isError} = useRestaurant();
  const navigation = useNavigation<any>();
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
            return (
              <FlatList
                data={items}
                showsVerticalScrollIndicator={false}
                mb={spaces[4] + 4}
                renderItem={({item}) => {
                  return (
                    <TouchableOpacity
                      onPress={() => navigation.push('RestaurantDetails')}>
                      <RestaurantsInfoCard
                        restaurant={{
                          ...item,
                          // add this temporarily while using fake data
                          photos: [
                            'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
                          ],
                          address: item.vicinity,
                        }}
                      />
                    </TouchableOpacity>
                  );
                }}
                keyExtractor={item => item.place_id}
              />
            );
          }}
        />
      </View>
    </View>
  );
};
