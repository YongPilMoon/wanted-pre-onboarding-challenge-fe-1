import { useQuery } from "@tanstack/react-query";
import { todoKeys, getTodos } from "./api";

function TodoList() {
  const { data: todos } = useQuery(todoKeys.todos, getTodos, {
    select: ({ data }) => data,
  });
  console.log(todos);
  return <div className="border border-blue-100 p-6">todos</div>;
}

export default TodoList;
