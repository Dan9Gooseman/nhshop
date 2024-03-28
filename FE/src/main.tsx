import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./Shop.tsx";
import Product from "./page/ProductPage.tsx/Product.tsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
