import React, { useEffect } from "react";
import MainPhoto from "./Home-Components/MainPhoto/MainPhoto";
import Maintain from "./Home-Components/Maintain/Maintain";
import MoreSportVerse from "./Home-Components/MoreSportVerse/MoreSportVerse";
import SliderComponent from "../../../components/sliderComponent/SliderComponent";

const Home = () => {
  return (
    <div>
      <MainPhoto />
      <Maintain />
      <SliderComponent title={"Best Of SPORTY-VERSE"} param={"new=true"} />
      <MoreSportVerse />
      <SliderComponent title={"Caps & Shocks"} param={"category=women"} />
    </div>
  );
};

export default Home;
