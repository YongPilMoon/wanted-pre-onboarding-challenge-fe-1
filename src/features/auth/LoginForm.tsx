import Button from "@/ui/Button";
import TextField from "@/ui/TextField";

import { object, string } from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormGroup from "@/ui/FormGroup";

type LoginForm = {
  email: string;
  password: string;
};

const loginFormschema = object().shape({
  email: string().email().required(),
  password: string().min(8).max(24).required(),
});

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<LoginForm>({
    defaultValues: { email: "", password: "" },
    resolver: yupResolver(loginFormschema),
    mode: "onChange",
  });

  const onSubmit = (data: LoginForm) => console.log(data);
  const { email, password } = watch();

  return (
    <div className="w-full">
      <FormGroup onSubmit={handleSubmit(onSubmit)} title="로그인">
        <TextField
          label="이메일"
          {...register("email")}
          errorMessage={errors.email?.message}
        />
        <TextField
          label="비밀번호"
          {...register("password")}
          type="password"
          errorMessage={errors.password?.message}
        />
        <Button
          disabled={
            Object.keys(errors).length !== 0 || email === "" || password === ""
          }
        >
          로그인
        </Button>
      </FormGroup>
    </div>
  );
}

export default LoginForm;
