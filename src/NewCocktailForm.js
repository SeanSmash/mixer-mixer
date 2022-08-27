import React, { useState, useContext } from "react";
import { CurrentUserContext } from "./UserInfo";

function NewCocktailForm({ onNewCocktail }) {
    const [ baseLiquor, setBaseLiquor ] = useState("")
    const [ cocktailDescription, setCocktailDescription ] = useState("")
    const [ imageURL, setImageURL ] = useState("")
    const date = new Date()
    const jsonDate = date.toJSON()
    const [ currentUser, setCurrentUser ] = useContext(CurrentUserContext)

    function onBaseLiquorInput(e){
        setBaseLiquor(e.target.value)
    }

    function onCoctailDescriptionInput(e){
        setCocktailDescription(e.target.value)
    }

    function handleImageInput(e){
        setImageURL(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        const newCocktail = {
            base: baseLiquor,
            username: currentUser,
            description: cocktailDescription,
            image: imageURL,
            dateCreated: jsonDate,
        }
        fetch("http://localhost:3000/cocktails", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "base": newCocktail.base,
                "username": newCocktail.username,
                "description": newCocktail.description,
                "image": newCocktail.image,
                "dateCreated": newCocktail.dateCreated,
                "likes": 0,
                "comments": []
            })
        })
        .then(r => r.json())
        .then(data => onNewCocktail(data))
    }

    
    return (
        <form onSubmit={handleSubmit} >
            <span>Start mixing: </span>
            <input onChange={onBaseLiquorInput} type="text" placeholder="base liquor" />
            <input onChange={onCoctailDescriptionInput} type="text" placeholder="add your recipe, thoughts, details, etc" />
            <input onChange={handleImageInput} type="text" placeholder="image URL" />
            <button>Submit</button>
        </form>
    )
}

export default NewCocktailForm;