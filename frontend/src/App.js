// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/navbarbelt";
import Home from "./Components/Home/home";
import WhyUs from "./Components/WhyUs/whyus";
import Works from "./Components/Works/works";
import Footer from "./Components/Footer/footer";
import ScrapeRates from "./Components/ScraprRates/scraperates"; // Import your ScrapeRates component
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/scrape-rates" element={<ScrapeRates />} />
      </Routes>
      <WhyUs />
      <Works />
      <Footer />
    </div>
  );
}

export default App;
