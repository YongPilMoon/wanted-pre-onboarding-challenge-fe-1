import axios, { AxiosRequestConfig } from "axios";
import { tokenRepository } from "../utils/token";

const axiosConfig: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: { Authorization: `${tokenRepository.value}` },
};

export const API = axios.create(axiosConfig);
