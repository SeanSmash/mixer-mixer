import React, { useContext } from "react";
import CocktailCard from "./CocktailCard";
import { CurrentUserContext } from "./UserInfo"

function Cocktails({ cocktails, onDelete }){
    const [ currentUser, setCurrentUser ] = useContext(CurrentUserContext)

    return(
        <div>
        {cocktails.map(cocktail =>(
            <CocktailCard 
                key={cocktail.id}
                id={cocktail.id}
                base={cocktail.base}
                description={cocktail.description}
                username={cocktail.username}
                image={cocktail.image}
                dateCreated={cocktail.dateCreated}
                likes={cocktail.likes}
                onDelete={onDelete}
            />
        ))}
        </div>
    )
  }

export default Cocktails