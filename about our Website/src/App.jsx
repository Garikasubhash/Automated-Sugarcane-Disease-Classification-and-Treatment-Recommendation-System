import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUsWebsite from "./pages/AboutUsWebsite.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AboutUsWebsite />} />
      </Routes>
    </Router>
  );
};

export default App;
