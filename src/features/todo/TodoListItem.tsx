import type { Todo } from "./queries/useTodoList";

function TodoListItem({ title }: Todo) {
  return <h1 className="text-xl p-2">{title}</h1>;
}

export default TodoListItem;
