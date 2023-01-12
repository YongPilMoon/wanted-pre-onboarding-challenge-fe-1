import FormGroup from "@/ui/FormGroup";
import { useForm } from "react-hook-form";
import TextField from "@/ui/TextField";
import Button from "@/ui/Button";
import { object, string, ref } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

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

function SignUpForm() {
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

  const onSubmit = (data: SignUpFormType) => {
    console.log(data);
  };
  const { email, password, passwordConfirm } = watch();

  return (
    <div className="w-full">
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
      </FormGroup>
    </div>
  );
}

export default SignUpForm;
