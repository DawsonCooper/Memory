import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import MemorySortComponent from "./components/MemorySort/Sort";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/sort" element={<MemorySortComponent />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;