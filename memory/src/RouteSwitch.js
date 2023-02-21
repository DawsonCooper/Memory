import React from "react";
import { Router, Routes, Route } from "react-router-dom";
import App from "./App";
import MemorySortComponent from "./components/MemorySort/Sort";

const RouteSwitch = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/sort" element={<MemorySortComponent />} />
      </Routes>
    </Router>
  );
};

export default RouteSwitch;