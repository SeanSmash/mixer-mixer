import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Gallery from './Gallery';
import Login from './Login';
import './App.css';


function App() {
  const [ isLoggedIn, setIsLoggedIn ] = useState(false)
  const [ currentUser, setCurrentUser ] = useState("")

  function changeLogin(){
    setIsLoggedIn((isLoggedIn) => !isLoggedIn)
  }

  return (
    <div className="App">
      <NavBar 
        currentUser={currentUser} 
        onLogin={changeLogin} 
        loginStatus={isLoggedIn} 
      />
      
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route 
          path="/login" 
          element={<Login currentUser={setCurrentUser}  />} 
        />
        <Route path="*" element={<h1>404 not found</h1>} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;