import React from "react";
import GridItem from "./GridItem";
import GridTitle from "./GridTitle";

const FooterNav = ({ gridTitle, gridAbout, gridHelp }) => {
  return (
    <>
      <GridTitle options={gridTitle} />
      <GridItem options={gridHelp} />
      <GridItem options={gridAbout} />
    </>
  );
};

export default FooterNav;
