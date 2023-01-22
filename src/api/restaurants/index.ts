import {useQuery} from 'react-query';
import {customRestaunrantsInstance} from './restaurants.instance';
import {mocks, locations} from './mock';
import {LocationResults} from '@type/';

export const getRestaurantsNearby = (location: string) => {
  return customRestaunrantsInstance({
    url: 'some api address',
    method: 'get',
    params: {location},
  });
};

export const getLocation = (searchTerm: string) => {
  // create custom instance for location if needed
  return customRestaunrantsInstance({
    url: 'some url',
    method: 'get',
    params: {searchTerm},
  });
};

export const useGetRestaurants = (location: string) => {
  return useQuery('restaurants', async () => {
    // replace with this in the future
    // const data = await getRestaurantsNearby(location);
    // @ts-ignore
    const data = mocks[location];
    return data;
  });
};

const transformLocation = (data: LocationResults) => {
  const [{geometry}] = data.results;
  const {location} = geometry;
  const {lat, lng} = location;
  return `${lat},${lng}`;
};

export const useGetLocation = (searchTerm: string, options: any) => {
  return useQuery(
    'location',
    async () => {
      // replace with this in the future
      // const data = await getLocation(searchTerm);
      // @ts-ignore
      const locationData = locations[searchTerm];
      const result = transformLocation(locationData);
      return result;
    },
    options,
  );
};
