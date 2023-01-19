import { useMutation } from "@tanstack/react-query";
import type { AxiosResponse } from "axios";
import { useLocation, useNavigate } from "react-router-dom";

import { API } from "@/api/axiosInstance";
import { tokenRepository } from "@/utils/token";

export type AuthParams = { email: string; password: string };

export type AuthPayload = {
  message: string;
  token: string;
};

const login = ({ email, password }: AuthParams) => {
  return API.post<AuthParams, AxiosResponse<AuthPayload>>("/users/login", {
    email,
    password,
  });
};

export function useLoginMutation() {
  const location = useLocation();
  const navigate = useNavigate();

  const { mutateAsync } = useMutation({
    mutationFn: login,
    onSuccess: ({ data }) => {
      tokenRepository.value = data.token;
      const origin = location.state?.from?.pathname || "/";
      navigate(origin);
    },
  });

  return { mutateAsync };
}
