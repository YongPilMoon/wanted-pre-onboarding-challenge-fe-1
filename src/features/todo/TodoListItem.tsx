import { Button } from "@/ui";
import { useLocation, useNavigate } from "react-router-dom";
import type { Todo } from "./queries/useTodoList";
import { AiOutlineEdit, AiOutlineMinusCircle } from "react-icons/ai";
import colors from "tailwindcss/colors";

function TodoListItem({ title, id }: Todo) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleTodoItem = () => {
    navigate(`${pathname}?todoId=${id}`);
  };

  const handleEdit = () => {
    console.log("edit");
  };

  return (
    <ul>
      <li
        role="presentation"
        className="flex justify-between items-center text-xl p-2"
        onClick={handleTodoItem}
        onKeyDown={handleTodoItem}
      >
        {title}
        <div className="grid gap-1 grid-flow-col">
          <Button variant="text" size="small" onClick={handleEdit}>
            <AiOutlineEdit size={24} color={colors.gray[600]} />
          </Button>
          <Button variant="text" size="small">
            <AiOutlineMinusCircle size={24} color={colors.red[600]} />
          </Button>
        </div>
      </li>
    </ul>
  );
}

export default TodoListItem;
