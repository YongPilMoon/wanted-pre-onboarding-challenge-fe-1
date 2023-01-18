export const rightSections = {
  DETAIL: "DETAIL",
  EDIT: "EDIT",
} as const;

export type RightSection = keyof typeof rightSections;
