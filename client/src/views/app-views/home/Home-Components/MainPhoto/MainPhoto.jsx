import React from "react";
import HeaderMain from "./HeaderMain/HeaderMain";
import "./sliderMain.scss";

const MainPhoto = () => {
  return (
    <div className="main">
      <video
        src="/images/adv1.mp4"
        autoPlay
        muted
        loop
        className="hidden lg:block xl:block md:block"
      />
      <video
        autoPlay
        muted
        loop
        className="lg:hidden xl:hidden md:hidden block w-96 h-96 object-cover "
        src="/images/adv1.mp4"
      />
      <HeaderMain />
    </div>
  );
};

export default MainPhoto;
