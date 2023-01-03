type TextInputProps = {
  label?: string;
};

function TextInput({ label }: TextInputProps) {
  return (
    <div>
      <input type="text" />
    </div>
  );
}

export default TextInput;
