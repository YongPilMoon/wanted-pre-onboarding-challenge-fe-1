import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from "react";
import type { PropsWithChildren } from "react";

type ModalType = "editor";

export const ModalStateContext = createContext<ModalType[] | null>(null);
export const ModalSetterContext = createContext<Dispatch<
  SetStateAction<ModalType[]>
> | null>(null);

export const ModalProvider = ({ children }: PropsWithChildren) => {
  const [modalTypes, setModalTypes] = useState<ModalType[]>([]);
  const memorizedModalTypes = useMemo(() => modalTypes, [modalTypes]);

  return (
    <ModalStateContext.Provider value={memorizedModalTypes}>
      <ModalSetterContext.Provider value={setModalTypes}>
        {children}
      </ModalSetterContext.Provider>
    </ModalStateContext.Provider>
  );
};

function useModal() {
  const setModalTypes = useContext(ModalSetterContext);

  if (!setModalTypes) {
    throw new Error(`The Modal context should be used in the Modal provider.`);
  }

  const openModal = (type: ModalType) => {
    setModalTypes((prev) => [...prev, type]);
  };

  const closeModal = () => {
    setModalTypes((prev) => prev.slice(0, prev.length - 1));
  };

  return { openModal, closeModal };
}

export default useModal;
