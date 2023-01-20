import {mocks} from './mock';

export const useGetRestaurants = (location: string) => {
  //  change with real api req
  //@ts-ignore
  return {data: mocks[location]};
};
