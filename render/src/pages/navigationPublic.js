import React from "react";
import '../css/navigationPublic.css';
import { NavLink } from "react-router-dom";

function NavigationPublic([user, setUser]) {
  return (
    <div className="navMenu">
      <a href="/">Home</a>
      <a href="/signup">Signup</a>
      <a href="/login">LogIn</a>
      <NavLink to="/cars" data={[user, setUser]}>Cars</NavLink>
      <a href="/#intro">About</a>

      <div className="dot"></div>
    </div>
  );
}

export default NavigationPublic;