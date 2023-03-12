import {AxiosInstance, AxiosRequestConfig} from 'axios';

export const customInstanceFactory = (axiosInstance: AxiosInstance) => {
  return function <T>(config: AxiosRequestConfig): Promise<T> {
    const promise: any = axiosInstance({
      ...config,
    })
      .then(({data}) => data)
      .catch((error: any) => {
        console.log('API error:', error);
        throw new Error(error?.response?.data?.message);
      });
    return promise;
  };
};
