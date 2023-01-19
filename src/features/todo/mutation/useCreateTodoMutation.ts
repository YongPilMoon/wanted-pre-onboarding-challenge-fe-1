import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import type { Todo } from "../queries/useTodoList";
import API from "@/axiosInstance";
import { todoKeys } from "../queries/queryKeys";
import useModal from "@/hooks/useModal";

export type CreateTodoParams = Pick<Todo, "title" | "content">;

const createTodo = ({ title, content }: CreateTodoParams) => {
  return API.post<CreateTodoParams, AxiosResponse<{ data: Todo }>>("/todos", {
    title,
    content,
  });
};

function useCreateTodoMutation() {
  const queryClient = useQueryClient();
  const { closeModal } = useModal();
  const { mutateAsync } = useMutation(createTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries(todoKeys.todos);
      closeModal();
    },
  });
  return mutateAsync;
}

export default useCreateTodoMutation;
