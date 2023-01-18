import { Link } from "react-router-dom";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { authState } from "../store/atoms";
import Button from "./Button";

function Header() {
  const { token } = useRecoilValue(authState);
  const resetAuth = useResetRecoilState(authState);
  const onButtonClick = () => {
    localStorage.setItem("token", "");
    resetAuth();
  };
  return (
    <header className="px-8 py-4 flex justify-between border-b border-blue-100">
      <Link to="/">
        <h1 className="text-3xl font-bold">Todos</h1>
      </Link>
      {token && (
        <Button variant="text" size="small" onClick={onButtonClick}>
          로그아웃
        </Button>
      )}
    </header>
  );
}

export default Header;
