import { TextArea, TextField } from "@/ui";
import Button from "@/ui/Button";
import { useForm } from "react-hook-form";

type TodoEditorType = {
  id?: string;
};

function TodoEditor({ id }: TodoEditorType) {
  const { register } = useForm({
    defaultValues: {
      title: "",
      content: "",
    },
  });

  return (
    <div className="grid grid-flow-row gap-4 border border-blue-100 p-4">
      <TextField label="제목" placeholder="" />
      <TextArea label="내용" />
      <Button>{id ? "수정" : "작성"}</Button>
    </div>
  );
}

export default TodoEditor;
