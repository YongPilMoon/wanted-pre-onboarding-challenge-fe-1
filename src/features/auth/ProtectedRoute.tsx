import { PropsWithChildren } from "react";
import { useRecoilValue } from "recoil";
import { authState } from "../../store/atoms";
import { Navigate, useLocation } from "react-router-dom";

function ProtectedRoute({ children }: PropsWithChildren) {
  const { token } = useRecoilValue(authState);
  const location = useLocation();

  if (!token) {
    return <Navigate to="/auth/login" replace state={{ from: location }} />;
  }

  return <>{children}</>;
}

export default ProtectedRoute;
