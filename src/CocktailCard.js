import React from "react";

function CocktailCard({id, base, description, username, image, dateCreated, onDelete, currentUser }){

    function handleDelete(){
        if (username === currentUser){
            fetch(`http://localhost:3000/cocktails/${id}`, {
                method:"DELETE"
            })
            onDelete(id)
        }
    }

    return(
        <div className="cocktail-card">
            <img src={image} width="100px" alt={base} />
            <p>{username}: <span> {dateCreated}</span> </p>
            <p>Base: {base}</p>
            <p>Description: {description} </p>
            <button onClick={handleDelete} >Delete</button>
        </div>
    )
}

export default CocktailCard