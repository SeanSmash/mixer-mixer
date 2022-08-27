import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CurrentUserContext } from './UserInfo';


function NavBar(){
    const [currentUser, setCurrentUser ] = useContext(CurrentUserContext)

    function logout(){
        if (currentUser !== ""){
            return (
                <NavLink to="/login"> (Logout)</NavLink>
            )
        }
    }

    return (
        <>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about"> About</NavLink>
                <NavLink to="/gallery"> Gallery</NavLink>
                {logout()}
            </nav>
            <span>{(currentUser === "") ? null : `Welcome: ${currentUser}!`}</span>
        </>
    )
  }

  export default NavBar

  //                <NavLink to="/login"> {(loginStatus) ? "Logout" : "Login"}</NavLink>
