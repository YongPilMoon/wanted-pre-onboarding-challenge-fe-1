import type { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";

import { isLogin } from "@/utils/token";

export function NoProtectedRoute({ children }: PropsWithChildren) {
  if (isLogin()) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
}
