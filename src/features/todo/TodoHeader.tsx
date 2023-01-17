import { Button } from "@/ui";
import { useModalContext } from "@/ui/Modal";

function TodoHeader() {
  const { openModal } = useModalContext();

  const handleButtonClick = () => {
    openModal("editor");
  };

  return (
    <header className="flex justify-between">
      <h1 className="text-3xl font-bold">Todos</h1>
      <Button onClick={handleButtonClick}>할일 추가</Button>
    </header>
  );
}

export default TodoHeader;
