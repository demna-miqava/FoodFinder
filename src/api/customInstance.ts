import axios from 'axios';
import {API_BASE_URL, userStorage} from '@app/helpers';

export const customInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: `Bearer ${userStorage.getUserToken()}`,
  },
});
