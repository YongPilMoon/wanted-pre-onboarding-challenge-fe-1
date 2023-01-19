import { isLogin } from "@/utils/token";
import { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";

export function NoProtectedRoute({ children }: PropsWithChildren) {
  if (isLogin()) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
}
