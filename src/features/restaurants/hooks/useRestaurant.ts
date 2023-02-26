import {useEffect, useState} from 'react';
import {useGetLocation, useGetRestaurants} from '@api/restaurants';
import {useDebounce} from '@hooks/';

// use this as default location before getting permission to location
const defaultLocation = '37.7749295,-122.4194155';

export const useRestaurant = () => {
  const [searchCity, setSearchCity] = useState<string>('');
  const {debouncedValue: debouncedSearchedCity} = useDebounce({
    value: searchCity,
    delay: 1000,
  });

  const {data: locationData, refetch: refetchLocation} = useGetLocation(
    debouncedSearchedCity as any,
    {
      enabled: false,
    },
  );

  const {
    data: restaurantsData,
    isLoading,
    isFetching,
    isError,
    refetch: refetchRestaurants,
  } = useGetRestaurants(locationData || defaultLocation);

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
    isLoading: isFetching || isLoading,
    isError,
  };
};
