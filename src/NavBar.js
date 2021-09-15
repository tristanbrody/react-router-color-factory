import React from "react";
import { NavLink } from "react-router-dom";
import "./NavLink.css";

function NavBar({ data }) {
  return (
    <nav>
      <NavLink exact to="/home">
        home
      </NavLink>
      {data.map(d => {
        return (
          <NavLink exact to={d.path}>
            {d.name}
          </NavLink>
        );
      })}
    </nav>
  );
}

export default NavBar;
