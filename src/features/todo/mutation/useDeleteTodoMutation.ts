import API from "@/axiosInstance";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { todoKeys } from "../queries/queryKeys";

const deleteTodo = (id: string) => {
  return API.delete(`/todos/${id}`);
};

function useDeleteTodoMutation() {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation(deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries(todoKeys.todos);
    },
  });
  return { mutateAsync };
}

export default useDeleteTodoMutation;
