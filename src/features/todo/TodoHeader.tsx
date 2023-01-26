import { Button } from "@/features/ui";
import { useModal } from "@/features/ui/Modal/useModal";

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
