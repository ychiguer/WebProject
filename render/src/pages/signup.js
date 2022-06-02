import React from 'react';
import '../css/signup.css';
import { useState } from "react";

export default function SignUp()  {
    return (
        <div class="container">
        <div class="child">
      <form id="form_signup">
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label>First name
          <input
            type="text"
            className="form-control"
            placeholder="First name"
          /></label>
        </div>
        <div className="mb-3">
          <label>Last name
          <input type="text" className="form-control" placeholder="Last name" />
          </label>
        </div>
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
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/login">login?</a>
        </p>
      </form>
      </div></div>
    )
  }
