import {GOOGLE_API_BASE_URL} from '@app/helpers';
import Axios, {AxiosRequestConfig} from 'axios';
import {customInstanceFactory} from '../api.factory';

export const restaurantsAxiosInstance = Axios.create({
  baseURL: GOOGLE_API_BASE_URL,
  headers: {},
});

export const customRestaunrantsInstance = (args: AxiosRequestConfig) => {
  return customInstanceFactory(restaurantsAxiosInstance)({
    ...args,
    headers: {},
  });
};
