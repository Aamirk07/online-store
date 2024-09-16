import React from "react";
import Navbar from "../../views/app-views/navbar/Navbar";
import Footer from "../../views/app-views/footer/Footer";
import AppViews from "../../views/app-views/AppViews";

const AppLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="mx-10 min-h-[45vh]">
        <AppViews />
      </div>
      <Footer />
    </div>
  );
};

export default AppLayout;
