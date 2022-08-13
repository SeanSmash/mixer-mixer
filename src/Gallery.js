import React, { useState, useEffect } from "react";
import Cocktails from "./Cocktails";
import Search from "./Search";
import NewCocktailForm from "./NewCocktailForm";
import CocktailDetail from "./CocktailDetail";

function Gallery () {
    const [ allCocktails, setAllCocktails ] = useState([])
    const [ searchTerm, setSearchTerm ] = useState("")

    useEffect(() => {
        fetch("http://localhost:3000/cocktails")
        .then(r => r.json())
        .then(data => setAllCocktails(data))
    }, [])

    function handleSearch(searchTerm){
        setSearchTerm(searchTerm)
    }

    const cocktailsToDisplay = allCocktails.filter(cocktail =>{
        if (searchTerm === ""){
            return true
        } else if (cocktail.description.includes(searchTerm)){
            return true
        }
    })

    function handleDelete(id){
        console.log(id)
    }

    return (
        <>
            <header>
                <h2>Who's Mixing?</h2>
            </header>
            <NewCocktailForm />
            <Search onSearchInput={handleSearch} />
            <Cocktails cocktails={cocktailsToDisplay} onDelete={handleDelete} />
        </>
    )
}

export default Gallery;