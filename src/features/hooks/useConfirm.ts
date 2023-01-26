import { useSetRecoilState } from "recoil";

import { useModal } from "./useModal";

import type { ConfirmState } from "@/store/atoms";
import { confirmState } from "@/store/atoms";

export function useConfirm() {
  const { openModal } = useModal();
  const setConfirmState = useSetRecoilState(confirmState);

  const openConfirm = ({ message, onConfirm, onCancle }: ConfirmState) => {
    setConfirmState({ message, onConfirm, onCancle });
    openModal("confirm");
  };
  return { openConfirm };
}
