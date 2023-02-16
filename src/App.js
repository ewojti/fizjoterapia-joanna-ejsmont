import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import PricingDetails from "./pages/PricingDetails";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Routes className="App">
        <Route path="/" element={<Home />} />
        <Route path="/pricing/:id" element={<PricingDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
