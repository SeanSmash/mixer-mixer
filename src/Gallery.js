import React, { useState, useEffect } from "react";
import Cocktails from "./Cocktails";
import Search from "./Search";
import NewCocktailForm from "./NewCocktailForm";

function Gallery () {
    const [ allCocktails, setAllCocktails ] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/cocktails")
        .then(r => r.json())
        .then(data => setAllCocktails(data))
    }, [])

    function handleSearch(searchTerm){
        console.log(searchTerm)
    }

    return (
        <>
            <header>
                <h2>Who's Mixing?</h2>
            </header>
            <NewCocktailForm />
            <Search onSearch={handleSearch} />
            <Cocktails cocktails={allCocktails} />
        </>
    )
}

export default Gallery;