import type { PropsWithChildren } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { isLogin } from "@/utils/token";

export function ProtectedRoute({ children }: PropsWithChildren) {
  const location = useLocation();

  if (!isLogin()) {
    return <Navigate to="/auth/login" replace state={{ from: location }} />;
  }

  return <>{children}</>;
}
