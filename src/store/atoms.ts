import { atom } from "recoil";

import { rightSections } from "@/features/todo/constants";
import type { RightSection } from "@/features/todo/constants";

export const todoState = atom<{ rightSection: RightSection }>({
  key: "todoState",
  default: { rightSection: rightSections.DETAIL },
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
