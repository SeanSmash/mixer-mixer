import React from "react";

function CocktailCard({id, base, description, username, image}){
    return(
        <>
            <img src={image} width="100px" alt="image" />
            <p>{username}</p>
            <p>Base: {base}</p>
            <p>Description: {description}</p>
        </>
    )
}

export default CocktailCard