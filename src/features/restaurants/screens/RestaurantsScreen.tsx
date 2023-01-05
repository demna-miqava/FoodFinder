import {FlatList, useTheme, View} from 'native-base';
import React, {useState} from 'react';
import {SearchBar} from '@components/SearchBar';
import {RestaurantsInfoCard} from '../components/RestaurantInfoCard';
import {CardSkeleton} from '@components/Skeleton';
import {MakeRequestWrapper} from '@app/containers';
import {RestaurantCardType} from '@app/types';
import {ThemeType} from '@app/theme';

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
  const theme = useTheme();
  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <View style={stylesBuilder(theme).searchContainer}>
        <SearchBar label={'Search Restaurants'} />
      </View>
      <View style={stylesBuilder(theme).textContainer}>
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
    </>
  );
};

export default ResutaurantsScreen;

const stylesBuilder = (theme: ThemeType) => ({
  searchContainer: {
    padding: theme.space[3],
  },
  textContainer: {
    flex: 1,
    backgroundColor: 'teal',
    padding: theme.space[3],
  },
});
