import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import router
import Header from "./components/Header"; // Import Header component
import Home from "./pages/Home"; // Import Home page
import Projects from "./pages/Projects"; // Import Projects page
import About from "./pages/About"; // Import About page
import Contact from "./pages/Contact"; // Import Contact page
import Footer from './components/Footer'; // Import Footer component

function App() {
  return (
    <Router>
      {/* Always render Header on every page */}
      <Header />
      
      {/* Define the routes for different pages */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home page (with typing effect) */}
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
      {/* Always render Footer on every page */}
      <Footer />
    </Router>
  );
}

export default App;
