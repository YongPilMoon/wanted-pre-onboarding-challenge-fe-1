import axios, { AxiosRequestConfig } from "axios";
import { tokenRepository } from "../utils/token";

const BASE_URL = "http://localhost:8080";

const axiosConfig: AxiosRequestConfig = {
  baseURL: BASE_URL,
  headers: { Authorization: `${tokenRepository.value}` },
};

const axiosInstance = axios.create(axiosConfig);
export default axiosInstance;
