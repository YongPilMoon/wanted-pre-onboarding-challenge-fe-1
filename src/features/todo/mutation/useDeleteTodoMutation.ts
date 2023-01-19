import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useResetRecoilState } from "recoil";

import { todoKeys } from "../queries/queryKeys";

import { API } from "@/api/axiosInstance";
import { todoState } from "@/store/atoms";

const deleteTodo = (id: string) => {
  return API.delete(`/todos/${id}`);
};

export function useDeleteTodoMutation() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const resetTodoState = useResetRecoilState(todoState);

  const { mutateAsync } = useMutation(deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries(todoKeys.todos);
      navigate("/");
      resetTodoState();
    },
  });
  return { mutateAsync };
}
