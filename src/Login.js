import React, { useState } from "react";

function Login ({ currentUser }) {
    const [ userName, setUsername ] = useState("")

    function handleUserName(e){
        setUsername(e.target.value) 
    }

    function handleUserNameSubmit(e){
        e.preventDefault()
        currentUser(userName)
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