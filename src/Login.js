import React, { useState } from "react";

function Login ({ onCurrentUser, onLoginChange }) {
    const [ userName, setUsername ] = useState("")


    function handleUserName(e){
        setUsername(e.target.value) 
    }

    function handleUserNameSubmit(e){
        e.preventDefault()
        onCurrentUser(userName)
        onLoginChange()
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