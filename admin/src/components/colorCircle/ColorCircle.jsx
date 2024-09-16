// ColorCircles.js

import React, { useState } from "react";
import "./colorCircle.scss"; // Import your SCSS file

const ColorCircle = ({ colors }) => {
  const [selectedColor, setSelectedColor] = useState(null);

  const handleCircleClick = (color) => {
    setSelectedColor(color);
  };
  return (
    <div className="color-circles-container">
      {colors?.map((color, index) => (
        <div
          key={index}
          className={`color-circle ${
            selectedColor === color ? "selected" : ""
          }`}
          style={{ backgroundColor: color }}
          onClick={() => handleCircleClick(color)}
        />
      ))}
    </div>
  );
};

export default ColorCircle;
