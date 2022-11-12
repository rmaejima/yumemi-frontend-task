import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const RESAS_API_BASE_URL = 'https://opendata.resas-portal.go.jp';
const RESAS_API_KEY = process.env.REACT_APP_RESAS_API_KEY;

const setResasOptions = (options: AxiosRequestConfig): AxiosRequestConfig => {
  options = { ...options };

  // baseURLを付加
  if (options.baseURL == null) {
    options.baseURL = RESAS_API_BASE_URL;
  }

  // API KEYを付加
  if (options.headers == null) options.headers = {};
  options.headers['X-API-KEY'] = RESAS_API_KEY;

  return options;
};

export const requestResasGet = async <T>(
  url: string,
  options: AxiosRequestConfig = {},
): Promise<AxiosResponse<T>> => {
  const resasOptions = setResasOptions(options);
  return axios.get<T>(url, resasOptions);
};
