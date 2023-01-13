import { useRecoilValue, useResetRecoilState } from "recoil";
import { authState } from "../store/atoms";

function Header() {
  const { token } = useRecoilValue(authState);
  const resetAuth = useResetRecoilState(authState);
  const onButtonClick = () => {
    localStorage.setItem("token", "");
    resetAuth();
  };
  return (
    <header className="p-4 flex justify-end border-b border-blue-100">
      {token && (
        <button className="p-2 bg-gray-300 text-xs" onClick={onButtonClick}>
          로그아웃
        </button>
      )}
    </header>
  );
}

export default Header;
