import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { AxiosResponse } from "axios";

import { todoKeys } from "../queries/queryKeys";
import type { Todo } from "../queries/useTodoList";

import { API } from "@/api/axiosInstance";
import { useModal } from "@/ui/Modal/useModal";

export type CreateTodoParams = Pick<Todo, "title" | "content">;

const createTodo = ({ title, content }: CreateTodoParams) => {
  return API.post<CreateTodoParams, AxiosResponse<{ data: Todo }>>("/todos", {
    title,
    content,
  });
};

export function useCreateTodoMutation() {
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
