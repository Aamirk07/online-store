import React from "react";

const Price = () => {
  return (
    <div className="p-2 flex flex-col">
      <span>Browse by Price</span>
      <div className="mt-2">
        <input type="checkbox" className="custom-checkbox" />
        <label className="ml-1"> Below ₹500</label>
      </div>
      <div className="mt-2">
        <input type="checkbox" className="custom-checkbox" />
        <label className="ml-1">₹500 - ₹1000</label>
      </div>
      <div className="mt-2">
        <input type="checkbox" className="custom-checkbox" />
        <label className="ml-1">Above ₹1000</label>
      </div>
    </div>
  );
};

export default Price;
