import { ComponentProps, forwardRef } from "react";

type TextInputProps = {
  label: string;
} & ComponentProps<"input">;

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ label, ...otherProps }, ref) => {
    return (
      <label className="block">
        <span className="block text-sm font-medium text-slate-700">
          {label}
        </span>
        <input
          ref={ref}
          {...otherProps}
          className="block border border-slate-300 placeholder-slate-400 w-full p-1"
        />
      </label>
    );
  }
);

TextInput.displayName = "TextInput";

export default TextInput;
