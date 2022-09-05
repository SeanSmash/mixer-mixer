import React from "react";
import { Link } from "react-router-dom"

function CocktailCard({id, base, description, username, image, dateCreated, likes }){
    //left unused props in case they'll be incorporated later
    
    return(
        <div className="cocktail-card">
            <Link to={`/gallery/${id}`} >
            <img src={image} width="200px" alt="Cocktail Image" />
            <p>{username}</p>
            </Link>
        </div>
    )
}

export default CocktailCard