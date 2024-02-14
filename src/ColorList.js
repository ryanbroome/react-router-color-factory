import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ColorList.css";
import ColorForm from "./ColorForm";

const ColorList = () => {
  const INITIAL_COLORS = ["red", "green", "blue"];

  const [colors, setColors] = useState(INITIAL_COLORS);

  const add = (newColor) => {
    setColors([...colors, newColor]);
  };

  return (
    <div className="ColorList">
      <ColorForm add={add} />
      <ul>
        <li key="newColor">
          <Link to="/colors/new">Add Color</Link>
        </li>
        {colors.map((color) => (
          <li key={color}>
            <Link to={`/colors/${color}`}>{color}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ColorList;
