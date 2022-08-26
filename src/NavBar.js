import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CurrentUserContext } from './UserInfo';


function NavBar({ loginStatus }){
    const currentUser = useContext(CurrentUserContext)

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
