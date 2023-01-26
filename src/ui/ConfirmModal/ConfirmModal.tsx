import { useRecoilValue } from "recoil";

import { Button } from "../Button";

import { confirmState } from "@/store/atoms";
import { useModal } from "@/ui/Modal/useModal";

export function ConfirmModal() {
  const { message, onConfirm, onCancle } = useRecoilValue(confirmState);
  const { closeModal } = useModal();
  const handleConfirm = () => {
    if (onConfirm) {
      onConfirm();
    }
    closeModal();
  };

  const handleCancle = () => {
    if (onCancle) {
      onCancle();
    }
    closeModal();
  };
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-xl">{message}</h1>
      <div className="flex gap-2">
        <Button size="small" onClick={handleCancle}>
          취소
        </Button>
        <Button size="small" onClick={handleConfirm} color="gray">
          확인
        </Button>
      </div>
    </div>
  );
}
