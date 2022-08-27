import React, { useContext } from "react";
import Gallery from "./Gallery";
import { CurrentUserContext } from "./UserInfo";

function Home(){
  const [ currentUser, setCurrentUser ] = useContext(CurrentUserContext)

  function galleryShow(){
    if (currentUser !== "") {
      return (
        <Gallery/>
      )
    }
  }

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
      {galleryShow()}
    </div>
  )
}

export default Home