import { API } from "@/api/axiosInstance";
import { AxiosResponse } from "axios";

type AuthType = { email: string; password: string };
type AuthPayload = {
  message: string;
  token: string;
};

const login = ({ email, password }: AuthType) => {
  return API.post<AuthType, AxiosResponse<AuthPayload>>("/users/login", {
    email,
    password,
  });
};

const signUp = ({ email, password }: AuthType) => {
  return API.post<AuthType, AxiosResponse<AuthPayload>>("/users/create", {
    email,
    password,
  });
};

export { signUp, login };
