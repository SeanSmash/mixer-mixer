import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { CurrentUserContext } from "./UserInfo";

function Login () {
    const [ userName, setUserName ] = useState("")
    const [ currentUser, setCurrentUser ] = useContext(CurrentUserContext)
    const navigate = useNavigate()

    useEffect(() => {
        setCurrentUser("")
    }, [])

    function handleUserName(e){
        setUserName(e.target.value) 
    }

    function handleUserNameSubmit(e){
        e.preventDefault()
        setCurrentUser(userName)
        navigate("/")
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