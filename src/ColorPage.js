import React from "react";
import { NavLink } from "react-router-dom";

function ColorPage({ colors }) {
  return colors.map(c => {
    return (
      <NavLink exact to={c.path}>
        {c.name}
      </NavLink>
    );
  });
}

export default ColorPage;
