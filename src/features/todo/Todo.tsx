import { TodoDetail } from "./TodoDetail";
import { TodoEditor } from "./TodoEditor";
import { TodoHeader } from "./TodoHeader";
import { TodoList } from "./TodoList";
import { useRecoilValue } from "recoil";
import { todoState } from "@/store/atoms";
import { rightSections } from "./constants";
import { useLocation } from "react-router-dom";

export function Todo() {
  const { rightSection } = useRecoilValue(todoState);
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const todoIdParam = searchParams.get("todoId");

  return (
    <div className="flex flex-col gap-4">
      <TodoHeader />
      <div className="grid grid-cols-2">
        <TodoList />
        <div className="p-6">
          {rightSection === rightSections.DETAIL ? (
            <TodoDetail todoId={todoIdParam} />
          ) : (
            <TodoEditor todoId={todoIdParam} />
          )}
        </div>
      </div>
    </div>
  );
}
