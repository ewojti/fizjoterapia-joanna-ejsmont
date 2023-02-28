import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import PricingDetails from "./pages/PricingDetails";
import BlogPage from "./pages/BlogPage";
import BlogPagePost from "./pages/BlogPagePost";


function App() {
  return (
    <div className="app__page">
      <Routes className="App">
        <Route path="/" element={<Home />} />
        <Route path="/cennik" element={<PricingDetails />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog-post" element={<BlogPagePost />} />
      </Routes>
    </div>
  );
}

export default App;
