import React, { useState } from "react";

function Search({ onSearch }){
    const [ searchTerm, setSearchTerm ] = useState("")

    function handleSearchInput(e){
        setSearchTerm(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        onSearch(searchTerm)
    }

    return(
      <form onSubmit={handleSubmit} >
        <input onChange={handleSearchInput} type="text" placeholder='Search...' />
      </form>
    )
  }

  export default Search