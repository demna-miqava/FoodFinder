import {FlatList, useTheme, View} from 'native-base';
import React from 'react';
import {SearchBar} from '@components/SearchBar';
import RestaurantsInfoCard from '../components/RestaurantInfoCard';

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

const ResutaurantsScreen = () => {
  const theme = useTheme();
  return (
    <>
      <View style={stylesBuilder(theme).searchContainer}>
        <SearchBar label={'Search restaurants'} />
      </View>
      <View style={stylesBuilder(theme).textContainer}>
        <FlatList
          data={[
            {name: 1},
            {name: 2},
            {name: 3},
            {name: 4},
            {name: 5},
            {name: 6},
            {name: 7},
          ]}
          renderItem={() => <RestaurantsInfoCard restaurant={restaurant} />}
          keyExtractor={item => item.name}
        />
      </View>
    </>
  );
};

export default ResutaurantsScreen;

const stylesBuilder = theme => ({
  searchContainer: {
    padding: theme.space[3],
  },
  textContainer: {
    flex: 1,
    backgroundColor: 'teal',
    padding: theme.space[3],
  },
});
