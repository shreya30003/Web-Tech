import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Businesses from "./components/Businesses";
import Sustainability from "./components/Sustainability";
import Investors from "./components/Investors";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> 
          <Route path="about/overview/" element={<About />} /> 
          <Route path="businesses/products" element={<Businesses />} /> 
          <Route path="sustainability/overview" element={<Sustainability />} /> 
          <Route path="investors/stock" element={<Investors />} /> 
        </Route> 
      </Routes> 
    </BrowserRouter>
  );
};

export default App;
