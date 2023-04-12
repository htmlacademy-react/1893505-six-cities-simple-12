import axios, { AxiosInstance } from 'axios';

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: 'https://12.react.pages.academy/six-cities-simple',
    timeout: 5000,
  });

  return api;
};
