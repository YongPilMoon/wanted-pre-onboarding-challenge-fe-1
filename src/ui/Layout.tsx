import { Outlet } from "react-router-dom";
import Header from "./Header";

export function Layout() {
  return (
    <div className="min-h-screen grid grid-rows-[min-content_1fr]">
      <Header />
      <main className="container mx-auto p-4 border border-blue-100">
        <Outlet />
      </main>
    </div>
  );
}
