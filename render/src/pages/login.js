import React from 'react';
import '../css/login.css';
import { NavLink } from "react-router-dom";

function Login() {
  return (
    <div class="container">
    <div class="child">
  <form id="form_signup">
    <h3>Login</h3>

    <div className="mb-3">
      <label>Email
      <input
        type="email"
        className="form-control"
        placeholder="Enter email"
      /></label>
    </div>
    <div className="mb-3">
      <label>Password
      <input
        type="password"
        className="form-control"
        placeholder="Enter password"
      /></label>
    </div>
    <div className="d-grid">
      <button type="submit" className="btn btn-primary">
        Login
      </button>
    </div>
    <p className="forgot-password text-right">
      <NavLink to="/signup"> SignUp </NavLink>
    </p>
  </form>
  </div></div>
  );
}

export default Login;
