import { NavLink } from "react-router-dom";

function Home() {
  return (
    <>
      <p>Hello World</p>
      <NavLink to="auth">Auth</NavLink>
    </>
  );
}

export default Home;
