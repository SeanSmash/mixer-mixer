import React from "react";
import Home from "./Home";
import About from "./About";

function NavBar( {onPageChange}){

    function handleClick(e){
        e.preventDefault()
        onPageChange(e.target.pathname)
    }

    return (
      <nav>
        <a onClick={handleClick} href="/">Home</a>
        <a onClick={handleClick} href="/about"> About</a>
      </nav>
    )
  }

  export default NavBar