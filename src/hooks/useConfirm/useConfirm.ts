import { confirmState, ConfirmState } from "@/store/atoms";

import { useSetRecoilState } from "recoil";
import useModal from "../useModal";

function useConfirm() {
  const { openModal } = useModal();
  const setConfirmState = useSetRecoilState(confirmState);

  const openConfirm = ({ message, onConfirm, onCancle }: ConfirmState) => {
    setConfirmState({ message, onConfirm, onCancle });
    openModal("confirm");
  };
  return { openConfirm };
}

export default useConfirm;
