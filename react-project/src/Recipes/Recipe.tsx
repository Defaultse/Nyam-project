import React, { ReactElement } from 'react'; 
import './Recipes.css'; 
interface Props {
    title?: string,
    calories?: string,
    image?: string, 
    ingredients : any
}

export default function Recipe({title, calories, image, ingredients}: Props): ReactElement {
    return (
        <div className = 'recipe'>
            <h1>{title}</h1>
            <ol> 
                {ingredients.map(ingredient =>(
                    <li>
                        {ingredient.text}
                    </li>
                ))}
            </ol> 
            <p>{calories}</p>
            <img className ='image'src={image}></img>
        <hr/>
        </div>
    )
}
