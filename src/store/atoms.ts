import { rightSections } from "@/features/todo/constants";
import type { RightSection } from "@/features/todo/constants";
import { atom } from "recoil";

export const authState = atom({
  key: "authState",
  default: { token: localStorage.getItem("token") },
});

export const todoState = atom<{ todoId: string; rightSection: RightSection }>({
  key: "todoState",
  default: { todoId: "", rightSection: rightSections.DETAIL },
});

export type ConfirmState = {
  message: string;
  onConfirm?: () => void;
  onCancle?: () => void;
};

export const confirmState = atom<ConfirmState>({
  key: "confirmState",
  default: { message: "", onConfirm: undefined, onCancle: undefined },
});
