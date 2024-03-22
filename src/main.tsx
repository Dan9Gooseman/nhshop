import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./Shop.tsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
