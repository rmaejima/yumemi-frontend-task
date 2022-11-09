import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const RESAS_API_BASE_URL = process.env.REACT_APP_RESAS_API_BASE_URL;

const setResasOptions = (options: AxiosRequestConfig): AxiosRequestConfig => {
  options = { ...options };

  // baseURLを付加
  if (options.baseURL == null) {
    options.baseURL = RESAS_API_BASE_URL;
  }

  return options;
};

export const requestResasGet = async <T>(
  url: string,
  options: AxiosRequestConfig = {},
): Promise<AxiosResponse<T>> => {
  const resasOptions = setResasOptions(options);
  return axios.get<T>(url, resasOptions);
};
