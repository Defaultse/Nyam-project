import React, { ReactElement, useEffect } from 'react'

interface Props {
    
}

const APP_ID = "bcf72ecd";
const APP_KEY = "3eba030c527845f34fe665899441bd71";


export default function Recepies({}: Props): ReactElement { 

useEffect(()=>{
    getRecepies();
}, [])

const getRecepies = async() => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    console.log(data);
}

    return (
        <div>
            <form>
                <input type="text"/>
                <button type="submit">Search</button>
            </form>
        </div>
    )
}
