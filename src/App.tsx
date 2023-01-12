import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Login from "@/pages/Login";
import Home from "@/pages/Home";
import Layout from "@/ui/Layout";
import SignUp from "@/pages/SignUp";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProtectedRoute from "./features/auth/ProtectedRoute";
import { RecoilRoot } from "recoil";

const queryClient = new QueryClient();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route
        index
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route path="auth/login" element={<Login />} />
      <Route path="auth/signup" element={<SignUp />} />
    </Route>
  )
);

function App() {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default App;
