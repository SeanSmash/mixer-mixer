import React, { useState, useContext } from "react";
import { CurrentUserContext } from "./UserInfo";

function Login () {
    const [ userName, setUserName ] = useState("")
    const [ currentUser, setCurrentUser ] = useContext(CurrentUserContext)

    function handleUserName(e){
        setUserName(e.target.value) 
    }

    function handleUserNameSubmit(e){
        e.preventDefault()
        setCurrentUser(userName)
    }

    return (
        <div>
            <header>
                <h3>Mixer Mixer, A CockTale Sharing Community</h3>
                <h1>Login</h1>
            </header>
            <form onSubmit={handleUserNameSubmit}>
                <input onChange={handleUserName} type="text" placeholder="enter username" />
                <button>Login</button>
             </form>
        </div>
    )
}

export default Login;