import React, { useState, useEffect } from "react";

function CocktailDetail () {
    const [ cocktail, setCocktail ] = useState(null)
    const id = 1

    useEffect(() => {
        fetch(`http://localhost:3000/cocktails/${id}`)
        .then(r => r.json())
        .then(data => setCocktail(data))
    }, [id])

    function handleDelete(){
        console.log(id)
    }

    if (!cocktail) return <h2>Loading...</h2>

    const { base, username, description, image, dateCreated } = cocktail

    console.log(cocktail)

    return (
        <section>
            <div className="cocktail-card">
                <img src={image} width="100px" alt={base} />
                <p>{username} <span> {dateCreated}</span> </p>
                <p>Base: {base}</p>
                <p>Description: {description} </p>
                <button onClick={handleDelete} >Delete</button>
            </div>
        </section>
    )
}

export default CocktailDetail;