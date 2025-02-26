import React from "react";
import "./index.scss"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Views from "./views/Views";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Views />} />
      </Routes>
    </Router>
  );
}

export default App;
