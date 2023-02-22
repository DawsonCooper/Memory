import React from "react";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import MemorySortComponent from "./components/MemorySort/Sort";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/sort" element={<MemorySortComponent />} />
      </Routes>
      </HashRouter>
    </BrowserRouter>
  );
};

export default RouteSwitch;