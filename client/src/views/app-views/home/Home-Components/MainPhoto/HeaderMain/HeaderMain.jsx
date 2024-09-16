import React from "react";
import "./HeaderMain.scss";

const HeaderMain = () => {
  return (
    <div className="header-main">
      <span className="text-xs md:text-sm lg:text-base">
        Newly Available for Sale
      </span>
      <span className="head-text text-3xl md:text-4xl lg:text-6xl">
        Sporty-Verse Special
      </span>
      <span className="mb-4 text-sm md:text-base lg:text-lg">
        With the modern featuring retro design elements specific to workout
        Where Performance Meets Style
      </span>
      <div className="buttons-main">
        <button className="bg-black rounded-full px-6 py-1 md:py-2 md:text-base lg:py-2 lg:text-lg  text-white text-opacity-80 hover:bg-gray-400 text-xs">
          Review
        </button>
        <button className="bg-black rounded-full px-6 py-1 md:py-2 md:text-base lg:py-2 lg:text-lg text-white text-opacity-80 hover:bg-gray-400 text-xs">
          Check out Children's Products
        </button>
      </div>
    </div>
  );
};

export default HeaderMain;
