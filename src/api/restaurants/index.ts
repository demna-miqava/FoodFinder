import {useQuery} from 'react-query';
import {customRestaunrantsInstance} from './restaurants.instance';
import {mocks} from './mock';
import {LocationResults, UseQueryOptionsType} from '@type/';
import {GOOGLE_API_KEY} from '@app/helpers';

export const getRestaurants = (location: string) => {
  return customRestaunrantsInstance({
    url: ``,
    method: 'get',
    params: {location},
  });
};

export const getLocation = (searchTerm: string) => {
  // create custom instance for location if needed
  return customRestaunrantsInstance({
    url: `/geocode/json?address=${searchTerm}&key=${GOOGLE_API_KEY}`,
    method: 'get',
    params: {searchTerm},
  });
};

export const useGetRestaurants = (location: string) => {
  return useQuery('restaurants', async () => {
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

export const useGetLocation = (
  searchTerm: string,
  options: UseQueryOptionsType,
) => {
  return useQuery(
    'location',
    async () => {
      // replace with this in the future
      const data = await getLocation(searchTerm);
      const result = transformLocation(data as LocationResults);
      return result;
    },
    options,
  );
};
