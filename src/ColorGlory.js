import React from "react";
import { useParams } from "react-router-dom";

const ColorGlory = () => {
  const { color } = useParams();

  const styles = {
    backgroundColor: color,
  };

  return (
    <div
      className="ColorGlory"
      style={styles}>
      <h1 className="ColorGlory-Title">{color}</h1>
    </div>
  );
};

export default ColorGlory;
