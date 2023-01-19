import { isLogin } from "@/utils/token";
import { PropsWithChildren } from "react";

import { Navigate, useLocation } from "react-router-dom";

function ProtectedRoute({ children }: PropsWithChildren) {
  const location = useLocation();

  if (!isLogin()) {
    return <Navigate to="/auth/login" replace state={{ from: location }} />;
  }

  return <>{children}</>;
}

export default ProtectedRoute;
