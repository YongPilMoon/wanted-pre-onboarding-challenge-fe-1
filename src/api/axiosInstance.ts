import type { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import axios from "axios";
import { toast } from "react-toastify";

import { tokenRepository } from "../utils/token";
type Error = {
  details: string;
};

type Success = {
  message?: string;
};

const axiosConfig: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_API_BASE_URL,
};

export const API = axios.create(axiosConfig);

API.interceptors.request.use((config: AxiosRequestConfig) => {
  const token = tokenRepository.value;

  if (token) {
    config.headers = { Authorization: token };
  }
  return config;
});

API.interceptors.response.use(
  (res: AxiosResponse<Success>) => {
    const message = res.data.message;
    if (message) {
      toast.success(message);
    }
    return res;
  },
  (error: AxiosError<Error>) => {
    toast.error(error.response?.data.details);
    return Promise.reject(error);
  }
);
