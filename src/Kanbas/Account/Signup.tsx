import React from "react";
import { Link } from "react-router-dom";
export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h3>Sign up</h3>
      <input className="form-control" placeholder="username" />

      <input className="form-control" placeholder="password" type="password" />

      <input
        className="form-control"
        placeholder="verify password"
        type="password"
      />

      <hr />
      <Link
        className="form-control bg-primary text-light"
        to="/Kanbas/Account/Profile"
      >
        {" "}
        Sign up{" "}
      </Link>

      <Link className="form-control" to="/Kanbas/Account/Signin">
        Sign in
      </Link>
    </div>
  );
}
