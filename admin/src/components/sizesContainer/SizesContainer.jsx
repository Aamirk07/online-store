// sizeContainers.js

import React, { useState } from "react";
import "./sizesContainer.scss"; // Import your SCSS file

const SizeContainer = ({ sizes }) => {
  const [selectedSize, setSelectedSize] = useState(null);

  const handleContainerClick = (size) => {
    setSelectedSize(size);
  };
  return (
    <div className="size-container">
      {sizes?.map((size, index) => (
        <div
          key={index}
          className={`size-sub-container ${
            selectedSize === size ? "selected" : ""
          }`}
          onClick={() => handleContainerClick(size)}
        >
          {size}
        </div>
      ))}
    </div>
  );
};

export default SizeContainer;
