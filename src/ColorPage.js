import React from "react";
import { Link } from "react-router-dom";

function ColorPage({ colors }) {
  return colors.map(c => {
    return (
      <Link exact to={c.path}>
        {c.name}
      </Link>
    );
  });
}

export default ColorPage;
