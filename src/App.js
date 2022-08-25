import React, { useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Gallery from './Gallery';
import Login from './Login';
import CocktailDetail from './CocktailDetail';
import './App.css';


function App() {
  const [ isLoggedIn, setIsLoggedIn ] = useState(true)
  const [ currentUser, setCurrentUser ] = useState("user3")

  function handleLoginChange(){
    setIsLoggedIn((isLoggedIn) => !isLoggedIn)
  }

  function handleCurrentUser(username){
    setCurrentUser(username)
  }

  function navBarShow(){
    if (isLoggedIn) {
      return (
        <NavBar 
          currentUser={currentUser} 
          loginStatus={isLoggedIn} 
        />
      )
    } else {
      return (
        <Link to={`/login`}><button>Please Login</button></Link>
      )
    }
  }


  return (
    <div className="App">
      {navBarShow()}
      
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery currentUser={currentUser} />} />
        <Route 
          path="/login" 
          element={<Login onCurrentUser={handleCurrentUser} onLoginChange={handleLoginChange} />} 
        />
        <Route path="/gallery/:id" element={<CocktailDetail currentUser={currentUser}/>} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<h1>404 not found</h1>} />
      </Routes>
    </div>
  );
}

export default App;