import { NavLink } from "react-router-dom";

function Home() {
  return (
    <>
      <p className="text-3xl font-bold underline">Hello World</p>
      <div>
        <NavLink to="auth/login">Login</NavLink>
      </div>
      <div>
        <NavLink to="auth/signup">SignUp</NavLink>
      </div>
    </>
  );
}

export default Home;
