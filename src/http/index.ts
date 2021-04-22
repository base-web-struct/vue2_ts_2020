/**
 * Axios Instance
 */
import { uuid } from '@/utils/uuid';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
  // 生成uuid 附着在请求头中
  config.headers['Request-ID'] = uuid();
  return config;
});

const respOnFulfilled = function (resp: AxiosResponse) {
  return resp;
};

/* eslint-disable @typescript-eslint/no-explicit-any */
const respOnReject = function (err: any) {
  Promise.reject(err);
};

axiosInstance.interceptors.response.use(respOnFulfilled, respOnReject);

export default axiosInstance;
