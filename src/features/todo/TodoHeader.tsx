import { Button } from "@/ui";
import { useModal } from "@/ui/Modal/useModal";

export function TodoHeader() {
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
