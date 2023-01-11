type TextInputProps = {
  label?: string;
};

function TextInput({ label }: TextInputProps) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-slate-700">{label}</span>
      <input
        type="text"
        className="block border border-slate-300 placeholder-slate-400 w-full"
      />
    </label>
  );
}

export default TextInput;
