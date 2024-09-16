import React, { useEffect, useState } from "react";
import "./FooterCategories.scss";

const FooterCategories = () => {
  const [isMobile, setIsMobile] = useState(false);

  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 952) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });
  return (
    <div
      className={` gap-8 md:grid-cols-4 mt-20  ${
        isMobile ? "flex flex-col" : "grid grid-cols-2"
      }`}
    >
      <div className={`${isMobile ? "footer-responsive" : "col-span-1"}`}>
        <span>Shoes</span>
        {isMobile ? (
          <i className="fa-solid fa-arrow-right text-xs text-sky-600" />
        ) : (
          <ul className="footer-categories">
            <li>All Shoes</li>
            <li>Training Shoes</li>
            <li>crampons</li>
            <li>Running Shoes</li>
          </ul>
        )}
      </div>
      <div className={`${isMobile ? "footer-responsive" : "col-span-1"}`}>
        <span>Clothes</span>
        {isMobile ? (
          <i className="fa-solid fa-arrow-right text-xs text-sky-600" />
        ) : (
          <ul className="footer-categories">
            <li>All Clothes</li>
            <li>Tops</li>
            <li>Tracksuit Bottoms & Tights</li>
            <li>Jackets</li>
          </ul>
        )}
      </div>
      <div className={`${isMobile ? "footer-responsive" : "col-span-1"}`}>
        <span>Child</span>
        {isMobile ? (
          <i className="fa-solid fa-arrow-right text-xs text-sky-600" />
        ) : (
          <ul className="footer-categories">
            <li>Kids Training Shoes</li>
            <li>Children's Backpacks</li>
            <li>Kids Cleats</li>
            <li>Children's Running Shoes</li>
          </ul>
        )}
      </div>
      <div className={`${isMobile ? "footer-responsive" : "col-span-1"}`}>
        <span>Highlights</span>
        {isMobile ? (
          <i className="fa-solid fa-arrow-right text-xs text-sky-600" />
        ) : (
          <ul className="footer-categories">
            <li>New Releases</li>
            <li>Sporty-Verse Run Club</li>
            <li>Sporty-Verse Training Club</li>
            <li>Backpacks and Bags</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default FooterCategories;
