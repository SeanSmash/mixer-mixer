import React from "react";
import { NavLink } from "react-router-dom";


function NavBar({ currentUser, onLogin, loginStatus }){

    return (
        <>
            <nav>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/about"> About</NavLink>
                <NavLink to="/gallery"> Gallery</NavLink>
                <NavLink to="/login"> ( {loginStatus ? "Logout" : "Login"} )</NavLink>
            </nav>
            <span>{(currentUser === "") ? null : `Welcome: ${currentUser}!`}</span>
        </>
    )
  }

  export default NavBar