import React, { useState, useEffect, useContext } from "react";
import Cocktails from "./Cocktails";
import Search from "./Search";
import NewCocktailForm from "./NewCocktailForm";
import { CurrentUserContext } from "./UserInfo";

function Gallery () {
    const [ allCocktails, setAllCocktails ] = useState([])
    const [ searchTerm, setSearchTerm ] = useState("")
    const [ currentUser, setCurrentUser ] = useContext(CurrentUserContext)


    useEffect(() => {
        fetch("http://localhost:3000/cocktails")
        .then(r => r.json())
        .then(data => setAllCocktails(data))
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

    function handleDelete(id){
        setAllCocktails(allCocktails.filter(cocktail =>{
            if (id !== cocktail.id){
                return true
            }
        })
    )}

    function handleNewCocktail(newCocktail){
        setAllCocktails([...allCocktails, newCocktail])
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
                onDelete={handleDelete} 
            />
        </>
    )
}

export default Gallery;