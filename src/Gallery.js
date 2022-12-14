import React, { useState, useEffect } from "react";
import Cocktails from "./Cocktails";
import Search from "./Search";
import NewCocktailForm from "./NewCocktailForm";

function Gallery () {
    const [ allCocktails, setAllCocktails ] = useState([])
    const [ searchTerm, setSearchTerm ] = useState("")

    useEffect(() => {
        fetch("http://localhost:3000/cocktails")
        .then(r => r.json())
        .then(data => setAllCocktails(data.reverse()))
    }, [])

    function handleSearch(searchTerm){
        setSearchTerm(searchTerm)
    }

    let cocktailsToDisplay = allCocktails.filter(cocktail =>{
        const description = cocktail.description.toLowerCase()
        const base = cocktail.base.toLowerCase()
        if (searchTerm === ""){
            return true
        } else if (description.includes(searchTerm.toLowerCase())){
            return true
        } else if (base.includes(searchTerm.toLowerCase()))
            return true
    })    

    function handleNewCocktail(newCocktail){
        setAllCocktails([newCocktail, ...allCocktails])
    }

    return (
        <>
            <header>
                <h2>Who's Mixing?</h2>
            </header>
            <NewCocktailForm 
                onNewCocktail={handleNewCocktail} 
            />
            <Search onSearchInput={handleSearch} />
            <Cocktails 
                cocktails={cocktailsToDisplay} 
            />
        </>
    )
}

export default Gallery;