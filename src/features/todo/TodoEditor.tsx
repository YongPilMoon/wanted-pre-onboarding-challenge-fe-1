import { TextArea, TextField } from "@/ui";
import Button from "@/ui/Button";
import { useForm } from "react-hook-form";
import FormGroup from "../../ui/FormGroup";
import useCreateTodoMutation, {
  CreateTodoParams,
} from "./mutation/useCreateTodoMutation";

type TodoEditorType = {
  id?: string;
};

function TodoEditor({ id }: TodoEditorType) {
  const createTodo = useCreateTodoMutation();
  const { register, handleSubmit } = useForm<CreateTodoParams>({
    defaultValues: {
      title: "",
      content: "",
    },
  });

  const onSubmit = ({ title, content }: CreateTodoParams) => {
    createTodo({ title, content });
  };

  return (
    <FormGroup onSubmit={handleSubmit(onSubmit)}>
      <TextField {...register("title")} label="제목" placeholder="" />
      <TextArea {...register("content")} label="내용" />
      <Button>{id ? "수정" : "작성"}</Button>
    </FormGroup>
  );
}

export default TodoEditor;
