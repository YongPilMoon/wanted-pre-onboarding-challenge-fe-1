import useModal from "@/hooks/useModal";
import { Button } from "@/ui";

function TodoHeader() {
  const { openModal } = useModal();

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
