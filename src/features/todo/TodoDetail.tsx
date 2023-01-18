import useTodoList from "./queries/useTodoList";
import { useLocation } from "react-router-dom";

function TodoDetail() {
  const { search } = useLocation();
  const todos = useTodoList();
  const params = new URLSearchParams(search);
  const todoId = params.get("todoId");

  const todo = todos?.find(({ id }) => id === todoId);

  return (
    <div className="grid gap-4">
      <h1 className="text-3xl">{todo?.title}</h1>
      <div>{todo?.content}</div>
    </div>
  );
}

export default TodoDetail;
