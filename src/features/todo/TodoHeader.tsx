import { useModal } from "@/hooks/useModal";
import { Button } from "@/ui";

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
