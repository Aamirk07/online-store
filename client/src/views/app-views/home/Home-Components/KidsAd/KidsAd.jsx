import React from "react";
import "./KidsAd.scss";

const KidsAd = () => {
  return (
    <div className="mb-20">
      <div className="head-text ">
        <span className="text-2xl">Kids</span>
        <div className="image-wrapper mt-4 mb-4 ">
          <img
            className="hidden lg:block md:block"
            src="https://www.angelandrocket.com/cdn/shop/collections/Boys_Activewear.png?v=1689799805"
            alt="Kids Ad Maintain"
          />
          <img
            className="lg:hidden md:hidden block"
            src="https://lisatrujilloactivewear.com/cdn/shop/products/image_62df96da-52ed-4457-ace0-8e920faa3ed9_1024x1024.jpg?v=1668228277"
            alt="Kids Ad"
          />
        </div>
        <div className="flex flex-col text-center ">
          <span className="text-xs md:text-sm lg:text-base">Magical Air</span>
          <span className="text-kids-ad-head-text  text-3xl md:text-4xl lg:text-6xl">
            FOR KIDS
          </span>
        </div>
        <div className="flex justify-center">
          <button className="bg-black rounded-full px-6 py-1.5 text-white text-opacity-80 text-sm md:text-base hover:bg-gray-400">
            Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default KidsAd;
