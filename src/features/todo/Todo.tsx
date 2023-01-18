import TodoDetail from "./TodoDetail";
import TodoEditor from "./TodoEditor";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";

function Todo() {
  return (
    <div className="flex flex-col gap-4">
      <TodoHeader />
      <div className="grid grid-cols-2">
        <TodoList />
        <div className="p-6">
          <TodoDetail />
          {/* <TodoEditor /> */}
        </div>
      </div>
    </div>
  );
}

export default Todo;
