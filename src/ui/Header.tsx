import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import { isLogin, tokenRepository } from "@/utils/token";

function Header() {
  const navigate = useNavigate();
  const onButtonClick = () => {
    tokenRepository.remove();
    navigate("auth/login");
  };
  return (
    <header className="px-8 py-4 flex justify-between border-b border-blue-100">
      <Link to="/">
        <h1 className="text-3xl font-bold">Todos</h1>
      </Link>
      {isLogin && (
        <Button variant="text" size="small" onClick={onButtonClick}>
          로그아웃
        </Button>
      )}
    </header>
  );
}

export default Header;
