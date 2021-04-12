import React from "react";
import { NavLink } from "react-router-dom";
//Routes for Superman, Marvel and Sports
function Nav() {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <NavLink exact to="/superman">
            Superman
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/marvel">
            Marvel
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/sports">
            Sports
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
