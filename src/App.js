import React from 'react';
import { Routes, Route } from "react-router-dom";
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Gallery from './Gallery';
import './App.css';


function App() {

  return (
    <div className="App">
      <NavBar />
      
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="*" element={<h1>404 not found</h1>} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;