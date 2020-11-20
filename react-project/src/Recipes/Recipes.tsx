import React, { ReactElement, useEffect, useState } from 'react';
import { receiveMessageOnPort } from 'worker_threads';
import Recipe from './Recipe';

interface Props {
    
}

export default function Recipes({}: Props): ReactElement { 
    const APP_ID = "bcf72ecd";
    const APP_KEY = "3eba030c527845f34fe665899441bd71";
    const [recipes, setRecipes] = useState<any[]>([]);

    useEffect(()=>{
       getRecepies();
    }, [])

    const getRecepies = async() => {
        const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await response.json();
        setRecipes(data.hits);
        console.log(data.hits);
    }

    return (
        <div>
            <form>
                <input type="text"/>
                <button type="submit">Search</button>
            </form>
            {recipes.map(recipe => (
                <Recipe 
                key={recipe.recipe.label}
                title={recipe.recipe.label} 
                calories={recipe.recipe.calories}
                image={recipe.recipe.image}
                />
            ))}
        </div>
    )
}
