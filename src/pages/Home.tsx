import { NavLink } from "react-router-dom";

function Home() {
  return (
    <>
      <p className="text-3xl font-bold underline">Hello World</p>
      <NavLink to="login">Auth</NavLink>
    </>
  );
}

export default Home;
