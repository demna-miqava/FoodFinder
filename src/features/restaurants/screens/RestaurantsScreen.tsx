import {FlatList, View} from 'native-base';
import React, {useState} from 'react';
import {SearchBar} from '@components/SearchBar';
import {RestaurantsInfoCard} from '../components/RestaurantInfoCard';
import {CardSkeleton} from '@components/Skeleton';
import {MakeRequestWrapper} from '@app/containers';
import {RestaurantCardType} from '@app/types';
import {useNoWifiToast} from '@app/hooks';
import {useTranslation} from 'react-i18next';
import {spaces} from '@app/theme';
import {useGetRestaurants} from '@api/restaurants';

// move this to separate file
const dummyLoadingData = [{id: '1'}, {id: '2'}, {id: '3'}];

const ResutaurantsScreen = () => {
  const {data, isLoading} = useGetRestaurants('37.7749295,-122.4194155');
  const [isError] = useState<boolean>(false);
  const {t} = useTranslation();
  useNoWifiToast();
  return (
    <View flex={1} padding={spaces[3]}>
      <View pb={spaces[3]}>
        <SearchBar label={t('searchRestaurnats')} />
      </View>
      <View>
        <MakeRequestWrapper
          data={data?.results}
          isFetching={isLoading}
          isEmpty={data?.length === 0}
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
              <FlatList
                data={items}
                showsVerticalScrollIndicator={false}
                mb={spaces[4] + 4}
                renderItem={({item}) => {
                  return (
                    <RestaurantsInfoCard
                      restaurant={{
                        ...item,
                        // add this temporarily while using fake data
                        photos: [
                          'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
                        ],
                      }}
                    />
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

export default ResutaurantsScreen;
