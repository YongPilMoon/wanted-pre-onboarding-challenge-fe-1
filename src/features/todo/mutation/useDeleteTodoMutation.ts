import { useMutation, useQueryClient } from "@tanstack/react-query";

import { todoKeys } from "../queries/queryKeys";

import { API } from "@/api/axiosInstance";

const deleteTodo = (id: string) => {
  return API.delete(`/todos/${id}`);
};

export function useDeleteTodoMutation() {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation(deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries(todoKeys.todos);
    },
  });
  return { mutateAsync };
}
