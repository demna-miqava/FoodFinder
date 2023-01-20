import Axios, {AxiosRequestConfig} from 'axios';
import {customInstanceFactory} from '../api.factory';

export const restaurantsAxiosInstance = Axios.create({
  baseURL: 'some base url saved in .env',
  headers: {},
});

export const customRestaunrantsInstance = (args: AxiosRequestConfig) => {
  return customInstanceFactory(restaurantsAxiosInstance)({
    ...args,
    headers: {},
  });
};
