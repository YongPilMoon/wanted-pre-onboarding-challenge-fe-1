import { Button } from "@/ui";
import type { Todo } from "./queries/useTodoList";
import { AiOutlineEdit, AiOutlineMinusCircle } from "react-icons/ai";
import colors from "tailwindcss/colors";
import { useRecoilState } from "recoil";
import { todoState } from "@/store/atoms";
import { rightSections } from "./constants";
import { MouseEventHandler } from "react";
import classNames from "classnames";

function TodoListItem({ title, id }: Todo) {
  const [{ todoId }, setTodoState] = useRecoilState(todoState);

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
        className={classNames(
          "flex justify-between items-center text-xl p-2 rounded hover:cursor-pointer hover:bg-slate-50",
          {
            "bg-green-100": todoId === id,
          }
        )}
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
