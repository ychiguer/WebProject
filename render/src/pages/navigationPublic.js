import React from "react";
import '../css/navigationPublic.css';
import { NavLink } from "react-router-dom";

function NavigationPublic() {
  return (
    <div class="navMenu">
    <NavLink to="/">Home</NavLink>
    <NavLink to="/signup">Signup</NavLink>
    <NavLink to="/login">LogIn</NavLink>
    <NavLink to="/about">About</NavLink>
    <div class="dot"></div>
    </div>
  );
}

export default NavigationPublic;