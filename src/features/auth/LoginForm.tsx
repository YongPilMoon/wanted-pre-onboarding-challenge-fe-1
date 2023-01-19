import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { object, string } from "yup";

import type { AuthParams } from "./mutation";
import { useLoginMutation } from "./mutation";

import { Button, TextField, FormGroup } from "@/ui";

const loginFormschema = object().shape({
  email: string().email().required(),
  password: string().min(8).max(24).required(),
});

export function LoginForm() {
  const { mutateAsync: login } = useLoginMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<AuthParams>({
    defaultValues: { email: "", password: "" },
    resolver: yupResolver(loginFormschema),
    mode: "onChange",
  });

  const { email, password } = watch();

  const onSubmit = ({ email, password }: AuthParams) => {
    login({ email, password });
  };

  return (
    <div className="w-full shadow-lg">
      <div className="grid gap-5 p-8">
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
              Object.keys(errors).length !== 0 ||
              email === "" ||
              password === ""
            }
            type="submit"
          >
            로그인
          </Button>
          <Link className="text-cyan-600" to="/auth/signup">
            회원가입
          </Link>
        </FormGroup>
      </div>
    </div>
  );
}
