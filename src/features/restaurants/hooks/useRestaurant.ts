import {useCallback, useEffect, useState} from 'react';
import {useGetLocation, useGetRestaurants} from '@api/restaurants';
import {useDebounce, useLocationPermissions, useMount} from '@hooks/';

export const useRestaurant = () => {
  const [searchCity, setSearchCity] = useState<string>('');

  const {getLocation, currentLocation} = useLocationPermissions();

  useMount(getLocation);

  const {debouncedValue: debouncedSearchedCity} = useDebounce({
    value: searchCity,
    delay: 1000,
  });
  // https://github.dev/amandeepmittal/react-native-examples/blob/main/infinite-scroll-with-react-query/src/screens/HomeScreen.js
  const {
    data: locationData,
    refetch: refetchLocation,
    isFetching: isLocationFetching,
  } = useGetLocation(debouncedSearchedCity as string, {
    enabled: false,
  });

  const {
    data: restaurantsData,
    isFetching: isRestaurantsFetching,
    isError,
    refetch: refetchRestaurants,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useGetRestaurants((locationData || currentLocation) as string, {
    enabled: false,
  });

  const loadMore = useCallback(() => {
    if (hasNextPage) {
      fetchNextPage();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasNextPage]);

  console.log('here 123 HAS NEXT PAGE', hasNextPage);

  useEffect(() => {
    if (debouncedSearchedCity) {
      refetchLocation();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchedCity]);

  useEffect(() => {
    if (locationData || currentLocation) {
      refetchRestaurants();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locationData, currentLocation]);

  return {
    setSearchCity,
    restaurantsData,
    isLoading:
      (isRestaurantsFetching && !isFetchingNextPage) || isLocationFetching,
    isFetchingNextPage,
    isError,
    refetchRestaurants,
    hasNextPage,
    loadMore,
  };
};
