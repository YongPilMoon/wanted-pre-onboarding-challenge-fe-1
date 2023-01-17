import useTodoList from "./queries/useTodoList";
import TodoListItem from "./TodoListItem";

function TodoList() {
  const todos = useTodoList();
  console.log("todos: ", todos);
  return (
    <div className="border border-blue-100 p-6">
      {todos?.map((todo) => (
        <TodoListItem key={todo.id} {...todo} />
      ))}
    </div>
  );
}

export default TodoList;
