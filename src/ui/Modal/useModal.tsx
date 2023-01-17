import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
import type { PropsWithChildren } from "react";

type ModalType = "editor";

export const ModalContext = createContext<{
  modalTypes: ModalType[];
  setModalTypes: Dispatch<SetStateAction<ModalType[]>>;
} | null>(null);

export const ModalProvider = ({ children }: PropsWithChildren) => {
  const [modalTypes, setModalTypes] = useState<ModalType[]>([]);

  return (
    <ModalContext.Provider value={{ modalTypes, setModalTypes }}>
      {children}
    </ModalContext.Provider>
  );
};

function useModal() {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error(`The Modal context should be used in the Modal provider.`);
  }

  const { modalTypes, setModalTypes } = context;

  const openModal = (type: ModalType) => {
    setModalTypes((prev) => [...prev, type]);
  };

  const closeModal = () => {
    setModalTypes((prev) => prev.slice(0, prev.length - 1));
  };

  return { openModal, closeModal, modalTypes };
}

export default useModal;
