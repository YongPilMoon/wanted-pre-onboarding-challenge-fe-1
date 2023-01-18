import { Button } from "@/ui";
import { useModalContext } from "@/ui/Modal";

function TodoHeader() {
  const { openModal } = useModalContext();

  const handleButtonClick = () => {
    openModal("editor");
  };

  return (
    <header className="flex justify-end">
      <Button onClick={handleButtonClick}>할일 추가</Button>
    </header>
  );
}

export default TodoHeader;
