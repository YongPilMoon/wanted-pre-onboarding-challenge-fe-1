import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import type { Todo } from "../queries/useTodoList";
import API from "@/api/axiosInstance";
import { todoKeys } from "../queries/queryKeys";
import { useSetRecoilState } from "recoil";
import { todoState } from "@/store/atoms";
import { rightSections } from "@/features/todo/constants";

export type UpdateTodoParams = Pick<Todo, "id" | "title" | "content">;

const updateTodo = ({ id, title, content }: UpdateTodoParams) => {
  return API.put<UpdateTodoParams, AxiosResponse<{ data: Todo }>>(
    `/todos/${id}`,
    {
      title,
      content,
    }
  );
};

function useUpdateTodoMutation() {
  const queryClient = useQueryClient();
  const setTodoState = useSetRecoilState(todoState);
  const { mutateAsync, isLoading } = useMutation(updateTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries(todoKeys.todos);
      setTodoState((prev) => ({ ...prev, rightSection: rightSections.DETAIL }));
    },
  });
  return { mutateAsync, isLoading };
}

export default useUpdateTodoMutation;
