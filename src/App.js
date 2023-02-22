import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import PricingDetails from "./pages/PricingDetails";
import BlogPage from "./pages/BlogPage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app__page">
      <Navbar />
      <Routes className="App">
        <Route path="/" element={<Home />} />
        <Route path="/cennik" element={<PricingDetails />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
