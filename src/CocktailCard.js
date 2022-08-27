import React from "react";
import { Link } from "react-router-dom"

function CocktailCard({id, base, description, username, image, dateCreated, likes }){
    
    return(
        <div className="cocktail-card">
            <Link to={`/gallery/${id}`} >
            <img src={image} width="100px" alt={base} />
            <p>{username}: <span> {dateCreated}</span> </p>
            </Link>
            <p>Base: {base}</p>
            <p>Description: {description} </p>
        </div>
    )
}

export default CocktailCard