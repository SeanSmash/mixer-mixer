import React from "react";
import { Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";

function NavBar(){

    return (
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/about"> About</Link>
      </nav>
    )
  }

  export default NavBar