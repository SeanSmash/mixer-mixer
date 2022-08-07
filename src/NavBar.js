import React from "react";
import { NavLink } from "react-router-dom";


function NavBar(){

    return (
      <nav>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about"> About</NavLink>
      </nav>
    )
  }

  export default NavBar