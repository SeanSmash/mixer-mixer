import React from "react";
import CocktailCard from "./CocktailCard";

function Cocktails({ cocktails }){

    return(
        <div>
        {cocktails.map(cocktail =>(
            <CocktailCard 
                key={cocktail.id}
                id={cocktail.id}
                base={cocktail.base}
                description={cocktail.description}
                username={cocktail.username}
                image={cocktail.image}
            />
        ))}
        </div>
    )
  }

export default Cocktails