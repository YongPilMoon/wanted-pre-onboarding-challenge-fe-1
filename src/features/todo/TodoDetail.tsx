import { useTodoList } from "./queries/useTodoList";

type TodoDetailProps = {
  todoId: string;
};
export function TodoDetail({ todoId }: TodoDetailProps) {
  const todos = useTodoList();
  const todo = todos?.find(({ id }) => id === todoId);

  return (
    <div className="grid gap-4">
      <h1 className="text-3xl">{todo?.title}</h1>
      <div>{todo?.content}</div>
    </div>
  );
}
