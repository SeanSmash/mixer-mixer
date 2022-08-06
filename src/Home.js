import React from "react";
import Search from "./Search";
import Cocktails from "./Cocktails";
import { cocktails } from './data';


function Home(){
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
        <Cocktails cocktails={cocktails}/>
      </div>
    )
  }

export default Home