import {API_BASE_URL} from '@app/helpers';
import Axios, {AxiosRequestConfig} from 'axios';
import {customInstanceFactory} from '../api.factory';

export const authInstance = Axios.create({
  // will be moved to .env
  baseURL: `${API_BASE_URL}/users`,
  headers: {},
});

export const customAuthInstance = (args: AxiosRequestConfig) => {
  return customInstanceFactory(authInstance)({
    ...args,
    headers: {},
  });
};
