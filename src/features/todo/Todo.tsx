import TodoEditor from "./TodoEditor";
import TodoList from "./TodoList";

function Todo() {
  return (
    <div className="flex flex-col gap-4">
      <header>
        <h1 className="text-3xl font-bold">Todos</h1>
      </header>
      <div className="grid grid-cols-2">
        <TodoList />
        <TodoEditor />
      </div>
    </div>
  );
}

export default Todo;
