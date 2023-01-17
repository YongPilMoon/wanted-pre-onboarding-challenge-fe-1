import { useMutation } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import API from "@/axiosInstance";

export type CreateTodoParams = {
  title: string;
  content: string;
};

type CreateTodoPayload = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
};

const createTodo = ({ title, content }: CreateTodoParams) => {
  return API.post<CreateTodoParams, AxiosResponse<{ data: CreateTodoPayload }>>(
    "/todos",
    {
      title,
      content,
    }
  );
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
