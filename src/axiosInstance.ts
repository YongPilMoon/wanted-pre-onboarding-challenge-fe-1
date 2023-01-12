import axios, { AxiosRequestConfig } from "axios";

const BASE_URL = "http://localhost:8080";
const LOGIN_TOKEN = localStorage.getItem("token");

const axiosConfig: AxiosRequestConfig = {
  baseURL: BASE_URL,
  headers: { Authorization: `Login ${LOGIN_TOKEN}` },
};

const axiosInstance = axios.create(axiosConfig);
export default axiosInstance;
