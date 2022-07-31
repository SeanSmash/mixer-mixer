import React from "react";

function CocktailCard({ cocktail }){
    return(
        <div className="cocktailCard">
            <img src= {cocktail.image} alt="cocktail image" />
            <p>{cocktail.username}</p>
            <ul>
                <li>Base Liqour: {cocktail.base}</li>
                <li>Description: {cocktail.description}</li>
            </ul>
        </div>
    )
}

export default CocktailCard