import { PropsWithChildren } from "react";

type ButtonProps = {
  disabled?: boolean;
};

function Button({ children, disabled }: PropsWithChildren<ButtonProps>) {
  return (
    <button
      className="p-3 bg-green-500 text-white font-bold disabled:bg-gray-300"
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
