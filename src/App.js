import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Home/Navbar";
import Home from "./Pages/Home/Homescreen";
import HeroSection from "./Pages/Home/HeroSection";
import AboutMe from "./Pages/Home/AboutMe";
import Work from "./Pages/Home/Work";
import MyPortfolio from "./Pages/Home/MyPortfolio";
import ContactMe from "./Pages/Home/ContactMe";
import CV from "./Pages/Home/CV";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/hero" element={<HeroSection />}></Route>
            <Route path="/Narbar" element={<Navbar />}></Route>
            <Route path="/about-me" element={<AboutMe />}></Route>
            <Route path="/work" element={<Work />}></Route>
            <Route path="/my-portfolio" element={<MyPortfolio />}></Route>
            <Route path="/contact" element={<ContactMe />}></Route>
            <Route path="/cv" element={<CV />}></Route>
            <Route path="*" element={<div>404 Not Found</div>}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
