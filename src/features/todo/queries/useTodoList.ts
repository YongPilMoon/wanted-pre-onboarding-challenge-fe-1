import { useQuery } from "@tanstack/react-query";

import { todoKeys } from "./queryKeys";

import { API } from "@/api/axiosInstance";

export type Todo = {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

const getTodos = () => {
  return API.get<{ data: Todo[] }>("/todos");
};

export function useTodoList() {
  const { data: todos } = useQuery(todoKeys.todos, getTodos, {
    select: ({ data }) => data.data,
  });
  return todos;
}
