import { isLogin } from "@/utils/token";
import { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";

function NoProtectedRoute({ children }: PropsWithChildren) {
  if (isLogin()) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
}

export default NoProtectedRoute;
