import {useEffect, useState} from 'react';
import {useGetLocation, useGetRestaurants} from '@api/restaurants';
import {useDebounce} from './useDebounce';

export const useRestaurant = () => {
  const [searchCity, setSearchCity] = useState<string>('');
  const {debouncedValue: debouncedSearchedCity} = useDebounce({
    value: searchCity,
    delay: 1000,
  });
  const {data: locationData = '', refetch: refetchLocation} = useGetLocation(
    debouncedSearchedCity as any,
    {
      enabled: false,
    },
  );
  const {
    data: restaurantsData,
    isLoading,
    isError,
    refetch: refetchRestaurants,
  } = useGetRestaurants(locationData!);

  useEffect(() => {
    if (debouncedSearchedCity) {
      refetchLocation();
    } else {
      // use current location
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
    isLoading,
    isError,
  };
};
