import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./Shop.tsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index path="home" element={<Home />} />
          <Route path="Shop" element={<Shop />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
