import { API } from "@/api/axiosInstance";
import { tokenRepository } from "@/utils/token";
import { useMutation } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";
import { AuthParams, AuthPayload } from "./useLoginMutation";

const signUp = ({ email, password }: AuthParams) => {
  return API.post<AuthParams, AxiosResponse<AuthPayload>>("/users/create", {
    email,
    password,
  });
};

export function useSignUpMuation() {
  const navigate = useNavigate();

  const { mutateAsync } = useMutation({
    mutationFn: signUp,
    onSuccess: ({ data }) => {
      tokenRepository.value = data.token;
      navigate("/");
    },
  });
  return { mutateAsync };
}
