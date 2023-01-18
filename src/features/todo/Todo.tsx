import TodoDetail from "./TodoDetail";
import TodoEditor from "./TodoEditor";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";
import { useRecoilValue } from "recoil";
import { todoState } from "@/store/atoms";
import { rightSections } from "./constants";

function Todo() {
  const { todoId, rightSection } = useRecoilValue(todoState);

  return (
    <div className="flex flex-col gap-4">
      <TodoHeader />
      <div className="grid grid-cols-2">
        <TodoList />
        <div className="p-6">
          {rightSection === rightSections.DETAIL ? (
            <TodoDetail todoId={todoId} />
          ) : (
            <TodoEditor todoId={todoId} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Todo;
