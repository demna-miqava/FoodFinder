import {useEffect, useState} from 'react';
import {useGetLocation, useGetRestaurants} from '@api/restaurants';
import {useDebounce} from '@hooks/';

export const useRestaurant = () => {
  // add pagination
  const [searchCity, setSearchCity] = useState<string>('');
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
  } = useGetRestaurants(locationData as string, {
    enabled: false,
  });

  useEffect(() => {
    if (debouncedSearchedCity) {
      refetchLocation();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchedCity]);

  useEffect(() => {
    if (locationData) {
      refetchRestaurants();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locationData]);

  return {
    setSearchCity,
    restaurantsData,
    isLoading: isRestaurantsFetching || isLocationFetching,
    isError,
  };
};
