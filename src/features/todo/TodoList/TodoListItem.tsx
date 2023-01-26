import classNames from "classnames";
import type { MouseEventHandler } from "react";
import { AiOutlineEdit, AiOutlineMinusCircle } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import colors from "tailwindcss/colors";

import { rightSections } from "../constants";
import { useDeleteTodoMutation } from "../mutation/useDeleteTodoMutation";
import type { Todo } from "../queries/useTodoList";

import { todoState } from "@/store/atoms";
import { Button } from "@/ui";
import { useConfirm } from "@/ui/ConfirmModal/useConfirm";

export function TodoListItem({ title, id }: Todo) {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const todoIdParam = searchParams.get("todoId");
  const navigate = useNavigate();
  const setTodoState = useSetRecoilState(todoState);
  const { mutateAsync: deleteTodo } = useDeleteTodoMutation();
  const { openConfirm } = useConfirm();

  const handleTodoItem = () => {
    setTodoState({ rightSection: rightSections.DETAIL });
    navigate(`/?todoId=${id}`);
  };

  const handleEdit: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    setTodoState({ rightSection: rightSections.EDIT });
    navigate(`/?todoId=${id}`);
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
            "bg-green-100": todoIdParam === id,
          }
        )}
        onClick={handleTodoItem}
      >
        {title}
        <div className="grid gap-1 grid-flow-col">
          <Button
            variant="text"
            color="gray"
            size="small"
            noMinWidth
            onClick={handleEdit}
          >
            <AiOutlineEdit size={24} color={colors.gray[600]} />
          </Button>
          <Button
            variant="text"
            color="gray"
            size="small"
            noMinWidth
            onClick={handleDelete}
          >
            <AiOutlineMinusCircle size={24} color={colors.red[600]} />
          </Button>
        </div>
      </li>
    </ul>
  );
}
