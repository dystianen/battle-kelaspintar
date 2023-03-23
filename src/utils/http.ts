import { appConfig } from '../config/api';
import axios from 'axios';

const instance = axios.create({
  baseURL: appConfig.apiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const http = {
  fetcher: async (url: string) => {
    const resp = await instance.get(appConfig.apiUrl + url);

    return resp.data;
  },
  get: async (url: string) => {
    const resp = await instance.post(appConfig.apiUrl + url);

    return resp.data;
  },
  post: async (url: string, data: {}) => {
    const resp = await instance.post(appConfig.apiUrl + url, data);

    return resp.data;
  },
  put: async (url: string, data: {}) => {
    const resp = await instance.put(appConfig.apiUrl + url, data);

    return resp.data;
  },
  del: async (url: string) => {
    const resp = await instance.delete(appConfig.apiUrl + url);

    return resp.data;
  },
};
