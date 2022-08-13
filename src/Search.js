import React from "react";

function Search({ onSearchInput }){

    function handleSearchInput(e){
        onSearchInput(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
    }

    return(
      <form onSubmit={handleSubmit} >
        <input onChange={handleSearchInput} type="text" placeholder='Search...' />
      </form>
    )
  }

  export default Search