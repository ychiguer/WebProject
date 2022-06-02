import React from 'react';
import '../css/login.css';
import { NavLink } from "react-router-dom";
import ReactDOM from "react-dom";
import NavigationPublic from './navigationPublic'
import { useState } from "react";

function Login([user, setUser]) {

  [email, setEmail] = useState("");
  [password, setEmail] = useState("");

  let submit = (e, p) => {

    const postBody = {

      email: e,

      password: p

    };

    const requestMetadata = {

      method: 'POST',

      headers: {

        'Content-Type': 'application/json'

      },

      body: JSON.stringify(postBody)

    };

    fetch("localhost:8080/gear?action=login", requestMetadata)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            user: "6297f4bbed12691629daa031"
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            user: "6297f4bbed12691629daa031"
          });
        }
      )
  }

  return (
    <div class="container">
      <NavigationPublic data={[user, setUser]} />
      <div class="child">
        <form id="form_signup">
          <h3>Login</h3>

          <div className="mb-3">
            <label>Email
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                onChange={(e) => { setState({ email: e.target.value }) }}
              /></label>
          </div>
          <div className="mb-3">
            <label>Password
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                // On n'avait pas pour implanter du hashings
                onChange={(e) => { setState({ password: e.target.value }) }}
              /></label>
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary" onClick={() => { submit(email, password) }}>
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
