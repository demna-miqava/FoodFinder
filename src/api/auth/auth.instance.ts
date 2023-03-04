import Axios, {AxiosRequestConfig} from 'axios';
import {customInstanceFactory} from '../api.factory';

export const authInstance = Axios.create({
  // will be moved to .env
  baseURL: 'http://localhost:3001',
  headers: {},
});

export const customAuthInstance = (args: AxiosRequestConfig) => {
  return customInstanceFactory(authInstance)({
    ...args,
    headers: {},
  });
};
