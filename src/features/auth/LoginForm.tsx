import Button from "@/ui/Button";
import TextField from "@/ui/TextField";

import { object, string } from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormGroup from "@/ui/FormGroup";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { login } from "./api";
import { authState } from "@/store/atoms";
import { useSetRecoilState } from "recoil";

type LoginForm = {
  email: string;
  password: string;
};

const loginFormschema = object().shape({
  email: string().email().required(),
  password: string().min(8).max(24).required(),
});

function LoginForm() {
  const location = useLocation();
  const navigate = useNavigate();
  const setToken = useSetRecoilState(authState);
  const { mutateAsync } = useMutation({
    mutationFn: login,
    onSuccess: ({ data }) => {
      localStorage.setItem("token", data.token);
      setToken((prev) => ({
        ...prev,
        token: data.token,
      }));
      const origin = location.state?.from?.pathname || "/dashboard";
      navigate(origin);
    },
  });

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

  const { email, password } = watch();

  const onSubmit = ({ email, password }: LoginForm) => {
    mutateAsync({ email, password });
  };

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
          type="submit"
        >
          로그인
        </Button>
        <Link className="text-cyan-600" to="/auth/signup">
          회원가입
        </Link>
      </FormGroup>
    </div>
  );
}

export default LoginForm;
