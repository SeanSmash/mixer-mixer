import React from "react";
import { NavLink } from "react-router-dom";


function NavBar({ currentUser, loginStatus }){

    return (
        <>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about"> About</NavLink>
                <NavLink to="/gallery"> Gallery</NavLink>
            </nav>
            <span>{(currentUser === "") ? null : `Welcome: ${currentUser}!`}</span>
        </>
    )
  }

  export default NavBar

  //                <NavLink to="/login"> {(loginStatus) ? "Logout" : "Login"}</NavLink>
