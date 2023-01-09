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

const restaurant = {
  name: 'Some restaurant',
  icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
  photos: [
    'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
  ],
  address: 'some address',
  openingHours: 'hours',
  rating: 4,
  isOpenNow: true,
  isClosedTemporarily: false,
};

// move this to separate file
const dummyLoadingData = [{id: '1'}, {id: '2'}, {id: '3'}];

const ResutaurantsScreen = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [data, setData] = useState<RestaurantCardType[]>([
    restaurant,
    restaurant,
    restaurant,
    restaurant,
  ]);
  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  const {t} = useTranslation();
  useNoWifiToast();
  return (
    <View
      flex={1}
      padding={spaces[3]}
      // check here
      style={{backgroundColor: 'teal'}}>
      <View pb={spaces[3]}>
        <SearchBar label={t('searchRestaurnats')} />
      </View>
      <View>
        <MakeRequestWrapper
          data={data}
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
                renderItem={() => (
                  <RestaurantsInfoCard restaurant={restaurant} />
                )}
                keyExtractor={item => item.name}
              />
            );
          }}
        />
      </View>
    </View>
  );
};

export default ResutaurantsScreen;
