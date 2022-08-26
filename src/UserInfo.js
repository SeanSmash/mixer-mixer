import React, { createContext } from "react"

// create the context object
//const PauseContext = createContext()
const CurrentUserContext = createContext()

// create the context provider (component)
/*function PauseProvider({ children }) {
    
    return (
        <PauseContext.Provider value={true}>
            {children}
        </PauseContext.Provider>
    )
}*/

function CurrentUserProvider({ children }){
    return (
        <CurrentUserContext.Provider value="user11">
            {children}
        </CurrentUserContext.Provider>
    )
}

// export
//export { PauseContext, PauseProvider }
export { CurrentUserContext, CurrentUserProvider}

// ReactDOM.render(
//    <PausedProvider>
//      <App />
//    </PausedProvicer>