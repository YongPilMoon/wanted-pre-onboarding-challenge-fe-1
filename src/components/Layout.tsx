import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="container mx-auto p-20">
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
