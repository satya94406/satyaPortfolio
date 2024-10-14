import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import { HashRouter as Router, Route, Routes } from "react-router-dom"; // Import HashRouter
import About from "./components/About";
import Contact from "./components/Contact";
import ScrollUp from "./utils/scrollUp";

const App = () => {
  return (
    <div>
      <Router> 
        <Header />
        <ScrollUp/>
        <Routes>
          <Route path="/" element={<Body />} /> 
          <Route path="/about" element={<About />} /> 
          <Route path="/contact" element={<Contact />} /> 
        </Routes>
      </Router>
    </div>
  );
};

export default App;
