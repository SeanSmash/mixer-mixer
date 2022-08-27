import React from "react";
import CocktailCard from "./CocktailCard";

function Cocktails({ cocktails }){

    return(
        <div className="Cocktails">
        {cocktails.map(cocktail =>(
            <CocktailCard 
                key={cocktail.id}
                id={cocktail.id}
                base={cocktail.base}
                description={cocktail.description}
                username={cocktail.username}
                image={cocktail.image}
                dateCreated={cocktail.dateCreated}
                likes={cocktail.likes}
            />
        ))}
        </div>
    )
  }

export default Cocktails