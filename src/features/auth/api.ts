import axios from "@/axiosInstance";
import { AxiosResponse } from "axios";
type SingUpType = { email: string; password: string };
type SignUpPayload = {
  message: string;
  token: string;
};

const signUp = ({ email, password }: SingUpType) => {
  return axios.post<SingUpType, AxiosResponse<SignUpPayload>>("/users/create", {
    email,
    password,
  });
};

export { signUp };
