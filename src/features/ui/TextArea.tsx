import type { ComponentProps } from "react";
import { forwardRef } from "react";

type TextAreaProps = {
  label?: string;
} & ComponentProps<"textarea">;

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, ...otherProps }, ref) => {
    return (
      <div>
        <span className="font-medium text-slate-700 mb-1">{label}</span>
        <textarea
          ref={ref}
          className="border border-slate-300 placeholder-slate-400 w-full p-1"
          rows={8}
          {...otherProps}
        />
      </div>
    );
  }
);

TextArea.displayName = "TextArea";
