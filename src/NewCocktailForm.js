import React, { useState } from "react";

function NewCocktailForm() {
    const [ baseLiquor, setBaseLiquor ] = useState("")

    function onBaseLiquorInput(e){
        setBaseLiquor(e.target.value)
    }

    
    return (
        <form>
            <span>Start mixing: </span>
            <input onChange={onBaseLiquorInput} type="text" placeholder="base liquor" />
            <input type="text" placeholder="add your recipe, thoughts, details, etc" />
            <button>Submit</button>
        </form>
    )
}

export default NewCocktailForm;