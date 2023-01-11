import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Auth from "@/pages/Login";
import Home from "@/pages/Home";
import Layout from "@/ui/Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="login" element={<Auth />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
