import { useMutation } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import type { Todo } from "../queries/useTodoList";
import API from "@/axiosInstance";

export type CreateTodoParams = Pick<Todo, "title" | "content">;

const createTodo = ({ title, content }: CreateTodoParams) => {
  return API.post<CreateTodoParams, AxiosResponse<{ data: Todo }>>("/todos", {
    title,
    content,
  });
};

function useCreateTodoMutation() {
  const { mutateAsync } = useMutation(createTodo, {
    onSuccess: ({ data }) => {
      const { title, content } = data.data;
    },
  });
  return mutateAsync;
}

export default useCreateTodoMutation;
