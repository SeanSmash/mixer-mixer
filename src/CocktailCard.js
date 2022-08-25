import React from "react";
import { Link } from "react-router-dom"

function CocktailCard({id, base, description, username, image, dateCreated, likes, currentUser, onDelete }){

    function handleDelete(){
        if (username === currentUser){
            fetch(`http://localhost:3000/cocktails/${id}`, {
                method:"DELETE"
            })
            onDelete(id)
        } else alert("You can only delete your posts")
    }

    return(
        <div className="cocktail-card">
            <Link to={`/gallery/${id}`} >
            <img src={image} width="100px" alt={base} />
            <p>{username}: <span> {dateCreated}</span> </p>
            </Link>
            <p>Base: {base}</p>
            <p>Description: {description} </p>
            <button onClick={handleDelete} >Delete</button>
        </div>
    )
}

export default CocktailCard