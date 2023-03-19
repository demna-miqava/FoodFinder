import {useInfiniteQuery, useQuery} from 'react-query';
import {customRestaunrantsInstance} from './restaurants.instance';
import {LocationResults, UseQueryOptionsType} from '@type/';
import {GOOGLE_API_KEY} from '@app/helpers';

export const getRestaurants = (location: string, nextPageToken: string) => {
  return customRestaunrantsInstance({
    url: `/place/nearbysearch/json?location=${location}&radius=10000&key=${GOOGLE_API_KEY}${
      nextPageToken ? `&pagetoken=${nextPageToken}` : ''
    }`,
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
  return useInfiniteQuery(
    'restaurants',
    async ({pageParam}) => {
      const data = await getRestaurants(location, pageParam);
      return data;
    },
    {
      ...options,
      getNextPageParam: (lastPage: any) => {
        if (lastPage.next_page_token !== null) {
          return lastPage.next_page_token;
        }
        return lastPage;
      },
    },
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
      const data = await getLocation(searchTerm);
      const result = transformLocation(data as LocationResults);
      return result;
    },
    options,
  );
};

export const getSingleRestaurant = (placeId: string) => {
  return customRestaunrantsInstance({
    url: `/place/details/json?place_id=${placeId}&key=${GOOGLE_API_KEY}`,
    method: 'get',
  });
};

export const useGetSingleRestaurant = (
  placeId: string,
  options: UseQueryOptionsType,
) => {
  return useQuery(
    'location',
    async () => {
      const data = await getSingleRestaurant(placeId);
      return data;
    },
    options,
  );
};
