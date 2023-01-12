import axios from "@/axiosInstance";

type SingUpType = { email: string; password: string };
type SignUpPayload = {
  message: string;
  token: string;
};

const signUp = ({ email, password }: SingUpType) => {
  return axios.post<SingUpType, SignUpPayload>("/users/create", {
    email,
    password,
  });
};

export { signUp };
