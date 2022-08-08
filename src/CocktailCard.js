import React from "react";

function CocktailCard({id, base, description, username, image, dateCreated }){

    function handleDelete(){
        console.log(id)
    }

    return(
        <div className="cocktail-card">
            <img src={image} width="100px" alt="image" />
            <p>{username}</p><span> {dateCreated}</span>
            <p>Base: {base}</p>
            <p>Description: {description}</p>
            <button onClick={handleDelete} >Delete</button>
        </div>
    )
}

export default CocktailCard