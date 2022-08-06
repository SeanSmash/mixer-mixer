import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import './App.css';


function App() {
  const [page, setPage ] = useState("/")

  return (
    <div className="App">
      <NavBar onPageChange={setPage} />
      
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<h1>404 not found</h1>} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
