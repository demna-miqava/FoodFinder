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
    restaurantsData: restaurantsData?.pages
      ?.map((page: any) => page?.results)
      .flat(),
    isLoading:
      (isRestaurantsFetching && !isFetchingNextPage) || isLocationFetching,
    isFetchingNextPage,
    isError,
    refetchRestaurants,
    hasNextPage,
    loadMore,
  };
};
