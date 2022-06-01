import React from "react";
import '../css/navigationLogIn.css';
import { NavLink } from "react-router-dom";

function NavigationLogIn() {
  return (
    <div className="navMenu">
    <NavLink to="/">Home</NavLink>
    <NavLink to="/addOffer">Add offer</NavLink>
    <NavLink to="/explore">Explore</NavLink>
    <NavLink to="/settings">Settings</NavLink>
    <NavLink to="/logout">Log out</NavLink>
    <div className="dot"></div>
    </div>
  );
}

export default NavigationLogIn;