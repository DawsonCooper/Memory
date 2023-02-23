import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import MemorySortComponent from "./components/MemorySort/Sort";

const RouteSwitch = () => {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/sort" element={<MemorySortComponent />} />
      </Routes>
    </HashRouter>
  );
};

export default RouteSwitch;