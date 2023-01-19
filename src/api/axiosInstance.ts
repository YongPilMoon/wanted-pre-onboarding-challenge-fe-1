import axios, { AxiosRequestConfig } from "axios";
import { tokenRepository } from "../utils/token";

const BASE_URL = "http://localhost:8080";

const axiosConfig: AxiosRequestConfig = {
  baseURL: BASE_URL,
  headers: { Authorization: `${tokenRepository.value}` },
};

export const API = axios.create(axiosConfig);
