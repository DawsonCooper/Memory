import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import MemorySortComponent from "./components/MemorySort/Sort";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
const RouteSwitch = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/sort" element={<MemorySortComponent />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </HashRouter>
  );
};

export default RouteSwitch;