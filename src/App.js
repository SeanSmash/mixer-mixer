import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Gallery from './Gallery';
import Login from './Login';
import CocktailDetail from './CocktailDetail';
import './App.css';


function App() {
  const [ isLoggedIn, setIsLoggedIn ] = useState(false)
  const [ currentUser, setCurrentUser ] = useState("")

  function handleLoginChange(){
    setIsLoggedIn((isLoggedIn) => !isLoggedIn)
  }

  function handleCurrentUser(username){
    setCurrentUser(username)
  }

  return (
    <div className="App">
      <NavBar 
        currentUser={currentUser} 
        loginStatus={isLoggedIn} 
      />
      
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route 
          path="/login" 
          element={<Login onCurrentUser={handleCurrentUser} onLoginChange={handleLoginChange} />} 
        />
        <Route path="*" element={<h1>404 not found</h1>} />
        <Route path="/gallery/:id" element={<CocktailDetail />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;