import { ComponentProps, forwardRef } from "react";

type TextInputProps = {
  label?: string;
  errorMessage?: string;
} & ComponentProps<"input">;

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ label, errorMessage, ...otherProps }, ref) => {
    return (
      <div>
        <label>
          <span className="font-medium text-slate-700 mb-1">{label}</span>
          <input
            ref={ref}
            {...otherProps}
            className="border border-slate-300 placeholder-slate-400 w-full p-1"
          />
        </label>
        {errorMessage && (
          <p className="text-xs text-rose-600 mt-1">{errorMessage}</p>
        )}
      </div>
    );
  }
);

TextInput.displayName = "TextInput";

export default TextInput;
