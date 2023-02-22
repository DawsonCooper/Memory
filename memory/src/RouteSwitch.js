import React from "react";
import { BrowserRouter, HashRouter, Route } from "react-router-dom";
import App from "./App";
import MemorySortComponent from "./components/MemorySort/Sort";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <HashRouter>
        <Route path="/" element={<App />} />
        <Route path="/sort" element={<MemorySortComponent />} />
      </HashRouter>
    </BrowserRouter>
  );
};

export default RouteSwitch;