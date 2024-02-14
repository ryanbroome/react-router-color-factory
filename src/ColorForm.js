import React, { useState } from "react";

const ColorForm = ({ add }) => {
  const INITIAL_STATE = { color: "" };
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    add(formData.color);
    setFormData(INITIAL_STATE);
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData(() => ({
      [name]: value,
    }));
  };

  return (
    <div className="ColorForm">
      <form onSubmit={handleSubmit}>
        <label htmlFor="color">Color Select</label>
        <input
          onChange={handleChange}
          type="text"
          id="color"
          name="color"
          value={formData.color}></input>
        <button>Add Color</button>
      </form>
    </div>
  );
};

export default ColorForm;
