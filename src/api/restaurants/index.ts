import {useQuery} from 'react-query';
import {mocks} from './mock';
import {customRestaunrantsInstance} from './restaurants.instance';

export const getRestaurantsNearby = (location: string) => {
  return customRestaunrantsInstance({
    url: 'some api address',
    method: 'get',
    params: {location},
  });
};

export const useGetRestaurants = (location: string) => {
  return useQuery('restaurants', async () => {
    // replace with this will be in the future
    // const data = await getRestaurantsNearby(location);
    // @ts-ignore
    const data = mocks[location];
    return data;
  });
};
