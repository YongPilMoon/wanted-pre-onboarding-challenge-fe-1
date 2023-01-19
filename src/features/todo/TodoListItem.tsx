import { Button } from "@/ui";
import type { Todo } from "./queries/useTodoList";
import { AiOutlineEdit, AiOutlineMinusCircle } from "react-icons/ai";
import colors from "tailwindcss/colors";
import { useRecoilState } from "recoil";
import { todoState } from "@/store/atoms";
import { rightSections } from "./constants";
import { MouseEventHandler } from "react";
import classNames from "classnames";
import useDeleteTodoMutation from "./mutation/useDeleteTodoMutation";
import useConfirm from "@/hooks/useConfirm/useConfirm";

function TodoListItem({ title, id }: Todo) {
  const [{ todoId }, setTodoState] = useRecoilState(todoState);
  const { mutateAsync: deleteTodo } = useDeleteTodoMutation();
  const { openConfirm } = useConfirm();

  const handleTodoItem = () => {
    setTodoState({ todoId: id, rightSection: rightSections.DETAIL });
  };

  const handleEdit: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    setTodoState({ todoId: id, rightSection: rightSections.EDIT });
  };

  const handleDelete: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    openConfirm({
      message: "정말 삭제 하실건가요?",
      onConfirm: () => {
        deleteTodo(id);
      },
    });
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
          <Button variant="text" size="small" noMinWidth onClick={handleDelete}>
            <AiOutlineMinusCircle size={24} color={colors.red[600]} />
          </Button>
        </div>
      </li>
    </ul>
  );
}

export default TodoListItem;
