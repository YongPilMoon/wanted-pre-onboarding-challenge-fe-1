import Button from "../Button";
import useModal from "./useModal";
import TodoEditorModalContent from "@/features/todo/TodoEditorModalContent";

const ModalContentMap = {
  editor: TodoEditorModalContent,
};

function Modal() {
  const { modalTypes, closeModal } = useModal();

  const handleCloseButton = () => {
    closeModal();
  };

  return (
    <>
      {modalTypes.map((type) => {
        const ModalContent = ModalContentMap[type];
        return (
          <div
            key={type}
            className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-gray-700/80 "
          >
            <div className="shadow-md w-fit h-fit bg-white p-20">
              <div>
                <Button onClick={handleCloseButton}>닫기</Button>
              </div>
              {<ModalContent />}
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Modal;
