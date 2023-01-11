import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Auth from "@/pages/Auth";
import Home from "@/pages/Home";
import Layout from "@/components/Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="auth" element={<Auth />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
