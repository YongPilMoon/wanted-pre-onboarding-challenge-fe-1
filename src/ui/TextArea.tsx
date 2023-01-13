import { ComponentProps } from "react";

type TextAreaProps = {
  label?: string;
} & ComponentProps<"textarea">;

const TextArea = ({ label }: TextAreaProps) => {
  return (
    <div>
      <span className="font-medium text-slate-700 mb-1">{label}</span>
      <textarea
        className="border border-slate-300 placeholder-slate-400 w-full p-1"
        rows={8}
      />
    </div>
  );
};

export default TextArea;
