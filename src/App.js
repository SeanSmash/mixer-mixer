import React, { useContext } from 'react';
import { Routes, Route, NavLink } from "react-router-dom";
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Gallery from './Gallery';
import Login from './Login';
import CocktailDetail from './CocktailDetail';
import { CurrentUserContext } from './UserInfo';
import './App.css';


function App() {
  const [currentUser, setCurrentUser ] = useContext(CurrentUserContext)

  function navBarShow(){
    if (currentUser !== "") {
      return (
        <NavBar />
      )
    } else {
      return (
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/login"> Login</NavLink>
        </nav>
      )
    }
  }


  return (
    <div className="App">
      {navBarShow()}
      
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route 
          path="/login" 
          element={<Login />} 
        />
        <Route path="/gallery/:id" element={<CocktailDetail />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<h1>404 not found</h1>} />
      </Routes>
    </div>
  );
}

export default App;