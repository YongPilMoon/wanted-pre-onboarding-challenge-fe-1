import axios from "@/axiosInstance";
import { AxiosResponse } from "axios";

type Todo = {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export const todoKeys = {
  todos: ["todos"] as const,
};

const getTodos = () => {
  return axios.get<AxiosResponse<Todo[]>>("/todos");
};

export { getTodos };
