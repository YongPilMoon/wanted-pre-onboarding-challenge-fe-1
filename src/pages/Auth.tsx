import Button from "@/components/Button";
import TextField from "@/components/TextField";

function Auth() {
  return (
    <div className="w-96 mx-auto grid gap-5 p-8 border">
      <h1 className="text-3xl font-bold">Login</h1>
      <TextField label="Email" />
      <TextField label="Password" />
      <Button>로그인</Button>
    </div>
  );
}

export default Auth;
