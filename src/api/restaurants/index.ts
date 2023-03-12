import {useQuery} from 'react-query';
import {customRestaunrantsInstance} from './restaurants.instance';
import {LocationResults, UseQueryOptionsType} from '@type/';
import {GOOGLE_API_KEY} from '@app/helpers';

export const getRestaurants = (location: string) => {
  return customRestaunrantsInstance({
    url: `/place/nearbysearch/json?location=${location}&radius=10000&key=${GOOGLE_API_KEY}`,
    method: 'get',
    params: {location},
  });
};

export const getLocation = (searchTerm: string) => {
  return customRestaunrantsInstance({
    url: `/geocode/json?address=${searchTerm}&key=${GOOGLE_API_KEY}`,
    method: 'get',
    params: {searchTerm},
  });
};

export const useGetRestaurants = (
  location: string,
  options: UseQueryOptionsType,
) => {
  return useQuery(
    'restaurants',
    async () => {
      const data = await getRestaurants(location);

      return data;
    },
    options,
  );
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
