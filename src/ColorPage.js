import React from "react";
import { useParams } from "react-router-dom";
import "./ColorPage.css";

function ColorPage() {
  const { color } = useParams();
  return <body style={{ backgroundColor: color }}>Welcome to {color}</body>;
}

export default ColorPage;
