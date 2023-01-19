import { useForm } from "react-hook-form";
import { TextField, Button, FormGroup } from "@/ui";
import { object, string, ref } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUp } from "./api";
import { useMutation } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
import { tokenRepository } from "../../utils/token";

type SignUpFormType = {
  email: string;
  password: string;
  passwordConfirm: string;
};

const signUpFormschema = object().shape({
  email: string().email().required(),
  password: string().min(8).max(24).required(),
  passwordConfirm: string()
    .min(8)
    .max(24)
    .required()
    .oneOf([ref("password")], "비밀번호가 일치하지 않습니다."),
});

export function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<SignUpFormType>({
    defaultValues: {
      email: "",
      password: "",
      passwordConfirm: "",
    },
    resolver: yupResolver(signUpFormschema),
    mode: "onChange",
  });
  const navigate = useNavigate();

  const { mutateAsync } = useMutation({
    mutationFn: signUp,
    onSuccess: ({ data }) => {
      tokenRepository.value = data.token;
      navigate("/");
    },
  });

  const onSubmit = async ({ email, password }: SignUpFormType) => {
    mutateAsync({ email, password });
  };

  const { email, password, passwordConfirm } = watch();

  return (
    <div className="w-full">
      <div className="grid gap-5 p-8 border">
        <FormGroup onSubmit={handleSubmit(onSubmit)} title="회원가입">
          <TextField
            {...register("email")}
            label="이메일"
            errorMessage={errors.email?.message}
          />
          <TextField
            {...register("password")}
            label="비밀번호"
            type="password"
            errorMessage={errors.password?.message}
          />
          <TextField
            {...register("passwordConfirm")}
            label="비밀번호 확인"
            type="password"
            errorMessage={errors.passwordConfirm?.message}
          />
          <Button
            disabled={
              Object.keys(errors).length !== 0 ||
              email === "" ||
              password === "" ||
              passwordConfirm === ""
            }
          >
            회원가입
          </Button>
          <Link className="text-cyan-600" to="/auth/login">
            로그인
          </Link>
        </FormGroup>
      </div>
    </div>
  );
}
