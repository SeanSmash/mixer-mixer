import React from "react";

function About(){
    return(
      <div>
        <header>
            <h3>Mixer Mixer, A CockTale Sharing Community</h3>
            <h1>About</h1>
        </header>
        <img 
            src="https://www.insidehook.com/wp-content/uploads/2021/07/50-Best-American-Whiskeys-final.jpg?fit=1200%2C800" 
            alt="Whiskey" 
            width={200}
        />
        <img 
            src="https://www.seriouseats.com/thmb/9nwNc-9bGyvZrKO6zcXzep2eVnw=/610x457/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__drinks.seriouseats.com__images__20120416tequilaprim-1e4012ae169f44759c5706c7954089e1.jpg" 
            alt="Tequila"
            width={200}
        />
        <img 
            src="https://images.immediate.co.uk/production/volatile/sites/2/2021/02/vodkaheader-fd48cee.jpg?quality=90&resize=960,872" 
            alt="Vodka"
            width={200} 
        />
        <p>
            Never drink alone.  Share your cocktails, creations, and 
            chitchat with a community of conneseurs!
        </p>
        <p>
            Add a pic of what you're drinking, ingredients, recipe, 
            and stories about where you are, who you're with, and what 
            you're doing.  Comment and like.  Make new friends.  Drink 
            socially, anywhere!
        </p>
      </div>
    )
  }

export default About