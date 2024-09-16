import React from "react";
import { Route, Routes } from "react-router-dom";
import AppLayout from "../layouts/app-layout/AppLayout";


const Views = () => {
  return (
    <Routes>
      <Route path="/*" element={<AppLayout />}></Route>
    </Routes>
  );
};

export default Views;
