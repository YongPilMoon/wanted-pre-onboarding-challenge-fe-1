import { Button } from "@/ui";
import { useLocation, useNavigate } from "react-router-dom";
import type { Todo } from "./queries/useTodoList";
import { AiOutlineEdit, AiOutlineMinusCircle } from "react-icons/ai";
import colors from "tailwindcss/colors";
import { useSetRecoilState } from "recoil";
import { todoState } from "@/store/atoms";
import { rightSections } from "./constants";
import { MouseEventHandler } from "react";

function TodoListItem({ title, id }: Todo) {
  const setTodoState = useSetRecoilState(todoState);

  const handleTodoItem = () => {
    setTodoState({ todoId: id, rightSection: rightSections.DETAIL });
  };

  const handleEdit: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    setTodoState({ todoId: id, rightSection: rightSections.EDIT });
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
          <Button variant="text" size="small" noMinWidth onClick={handleEdit}>
            <AiOutlineEdit size={24} color={colors.gray[600]} />
          </Button>
          <Button variant="text" size="small" noMinWidth>
            <AiOutlineMinusCircle size={24} color={colors.red[600]} />
          </Button>
        </div>
      </li>
    </ul>
  );
}

export default TodoListItem;
