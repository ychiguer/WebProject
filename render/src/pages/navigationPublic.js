import React from "react";
import '../css/navigationPublic.css';
import { NavLink } from "react-router-dom";

function NavigationPublic() {
  return (
    <div className="navMenu">
    <a href="/">Home</a>
    <a href="/signup">Signup</a>
    <a href="/login">LogIn</a>
    <a href="/cars">Cars</a>
    <a href="/#intro">About</a>
    
    <div className="dot"></div>
    </div>
  );
}

export default NavigationPublic;