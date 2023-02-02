import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.scss";
const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to={"/team"} className="navlink">
        TEAM
      </NavLink>
      <NavLink to={"/"} className="navlink">
        MERCATO
      </NavLink>
      <NavLink to={"/team"} className="navlink">
        PLAYER
      </NavLink>
    </div>
  );
};

export default Navbar;
