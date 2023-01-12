import { useQuery } from "@tanstack/react-query";
import { todoKeys, getTodos } from "./api";

function TodoList() {
  const { data: todos } = useQuery(todoKeys.todos, getTodos, {
    select: ({ data }) => data,
  });
  console.log(todos);
  return <div>todos</div>;
}

export default TodoList;
