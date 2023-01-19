import { useTodoList } from "./queries/useTodoList";
import { TodoListItem } from "./TodoListItem";

import { Spinner } from "@/ui";

export function TodoList() {
  const todos = useTodoList();

  return (
    <div className="shadow-lg min-h-96 p-6">
      {todos ? (
        todos.length > 0 ? (
          todos?.map((todo) => <TodoListItem key={todo.id} {...todo} />)
        ) : (
          <div className="p-10">
            <h1 className="text-xl">할 일을 추가해 보세요</h1>
          </div>
        )
      ) : (
        <div className="p-10">
          <Spinner />
        </div>
      )}
    </div>
  );
}
