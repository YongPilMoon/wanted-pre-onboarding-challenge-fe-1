import classNames from "classnames";
import type { ComponentProps, PropsWithChildren } from "react";

type Variant = "contained" | "text";
type Color = "green" | "gray";
type Size = "medium" | "small";

type ButtonProps = {
  variant?: Variant;
  color?: Color;
  size?: Size;
  isLoading?: boolean;
  noMinWidth?: boolean;
} & ComponentProps<"button">;

const containedColorStyle = {
  green: "bg-green-500 hover:bg-green-600 active:bg-green-700",
  gray: "bg-gray-300 hover:bg-gray-400",
};

const fontColorStyle = {
  green: "text-green hover:bg-green-100 active:bg-green-200",
  gray: "text-gray hover:bg-gray-100 active:bg-gray-200",
};

const fontSizeStyle = {
  medium: "p-3",
  small: "p-2 text-sm",
};

export function Button({
  variant = "contained",
  color = "green",
  size = "medium",
  isLoading = false,
  noMinWidth = false,
  children,
  ...otherProps
}: PropsWithChildren<ButtonProps>) {
  return (
    <button
      className={classNames(
        "disabled:bg-gray-300 rounded",
        {
          [`text-white font-bold ${containedColorStyle[color]}`]:
            variant === "contained",
          [`${fontColorStyle[color]}`]: variant === "text",
        },
        fontSizeStyle[size],
        { "min-w-24": !noMinWidth }
      )}
      {...otherProps}
    >
      {isLoading ? "loading" : <>{children}</>}
    </button>
  );
}
