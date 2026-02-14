import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DiseasesPage from "./pages/DiseasesPage.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DiseasesPage />} />
      </Routes>
    </Router>
  );
};

export default App;
