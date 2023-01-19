import { memo, useContext } from "react";
import { RxCross2 } from "react-icons/rx";

import { ConfirmModal } from "../hooks/useConfirm/ConfirmModal";
import { useModal, ModalStateContext } from "../hooks/useModal";

import { TodoEditorModalContent } from "@/features/todo/TodoEditorModalContent";

const ModalContentMap = {
  editor: TodoEditorModalContent,
  confirm: ConfirmModal,
};

export const Modal = memo(() => {
  const modalTypes = useContext(ModalStateContext);
  const { closeModal } = useModal();

  const handleCloseButton = () => {
    closeModal();
  };

  return (
    <>
      {modalTypes?.map((type) => {
        const ModalContent = ModalContentMap[type];
        return (
          <div
            key={type}
            className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-gray-700/80 "
          >
            <div className="shadow-md w-fit h-fit bg-white p-12 relative">
              <div className="absolute top-0 right-0">
                <button className="p-4" onClick={handleCloseButton}>
                  <RxCross2>닫기</RxCross2>
                </button>
              </div>
              {<ModalContent />}
            </div>
          </div>
        );
      })}
    </>
  );
});

Modal.displayName = "Modal";
