import React, { ReactElement, useEffect, useMemo, useState } from 'react'
import { ObjectFlags } from 'typescript';
import Recipe from './Recipe';
import "./Recipes.css"; 

export default function Recipes(): ReactElement { 
    const APP_ID = "bcf72ecd";
    const APP_KEY = "3eba030c527845f34fe665899441bd71";

    const [recipes, setRecipes] = useState<any[]>([]);
    const [search, setSearch] = useState("");  
    const [query, setQuery] = useState("chicken");

    useEffect(()=>{ 
       getRecepies();
    }, [query])

    const getRecepies = async() => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await response.json();
        setRecipes(data.hits);
        console.log(data.hits);
    }

    const getSearch = (e:any) => {
        e.preventDefault();
        setQuery(search);
        setSearch('');
    }

    // if (Object.keys(recipes).length===0) throw new Error("");
    return (
        <div className='Recipes'>
            <form className= 'search-form 'onSubmit={getSearch}>
                <input className = 'search-bar' type="text" value={search} onChange={(e)=>setSearch(e.target.value)}/>
                <button className = 'search-buttom' type="submit">Search</button>
            </form>
            <div className='container'>
            {recipes.map(recipe => (
                <Recipe 
                key={recipe.recipe.label}
                title={recipe.recipe.label} 
                calories={recipe.recipe.calories}
                image={recipe.recipe.image}
                ingredients= {recipe.recipe.ingredients}
                />
            ))}
            </div>
        </div>
    );
}
