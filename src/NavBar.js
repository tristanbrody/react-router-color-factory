import React from "react";
import { NavLink } from "react-router-dom";
import "./NavLink.css";

function NavBar({ data, setRandomColor, getRandomColor }) {
  const onClickFunc = name => {
    if (name === "random color") {
      setRandomColor(getRandomColor());
    } else return;
  };
  return (
    <nav>
      {data.map(d => {
        return (
          <NavLink exact to={d.path} onClick={() => onClickFunc(d.name)}>
            {d.name}
          </NavLink>
        );
      })}
    </nav>
  );
}

export default NavBar;
