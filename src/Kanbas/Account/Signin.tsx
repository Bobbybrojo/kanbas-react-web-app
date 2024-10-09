import { Link } from "react-router-dom";
export default function Signin() {
  return (
    <div id="wd-signin-screen">
      <h3>Sign in</h3>
      <input
        className="form-control"
        id="wd-username"
        placeholder="username"
      />{" "}
      <input
        className="form-control"
        id="wd-password"
        placeholder="password"
        type="password"
      />{" "}
      <hr />
      <Link
        className="form-control bg-primary text-light"
        id="wd-signin-btn"
        to="/Kanbas/Dashboard"
      >
        {" "}
        Sign in{" "}
      </Link>{" "}
      <Link
        className="form-control"
        id="wd-signup-link"
        to="/Kanbas/Account/Signup"
      >
        Sign up
      </Link>
    </div>
  );
}
