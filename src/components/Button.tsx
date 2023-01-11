import { PropsWithChildren } from "react";

function Button({ children }: PropsWithChildren) {
  return (
    <button className="p-3 bg-green-500 text-white font-bold">
      {children}
    </button>
  );
}

export default Button;
