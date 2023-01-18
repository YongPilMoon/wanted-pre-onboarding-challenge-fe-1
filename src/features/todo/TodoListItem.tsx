import { useLocation, useNavigate } from "react-router-dom";
import type { Todo } from "./queries/useTodoList";

function TodoListItem({ title, id }: Todo) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleTodoItem = () => {
    navigate(`${pathname}?todoId=${id}`);
  };

  return (
    <ul>
      <li
        role="presentation"
        className="text-xl p-2"
        onClick={handleTodoItem}
        onKeyDown={handleTodoItem}
      >
        {title}
      </li>
    </ul>
  );
}

export default TodoListItem;
