import React, { useState, useEffect } from "react";
import Search from "./Search";
import Cocktails from "./Cocktails";


function Home(){
    const [ allCocktails, setAllCocktails ] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/cocktails")
        .then(r => r.json())
        .then(data => setAllCocktails(data))
    }, [])

    return(
      <div>
        <header className="App-header">
            <img src="https://craftandcocktails.co/wp-content/uploads/2020/05/COFFEE-BEAN-BAMBOO-COCKTAIL-5-520x400.jpg" alt="logo" />
            <p>
                Mixer Mixer
            </p>
            <p>
                A CockTale Sharing Community
            </p>
        </header>
        <Search />
        <Cocktails cocktails={allCocktails}/>
      </div>
    )
  }

export default Home