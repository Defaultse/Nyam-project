import React, { ReactElement } from 'react'

interface Props {
    title?: string,
    calories?: string,
    image?: string
}

export default function Recipe({title, calories, image}: Props): ReactElement {
    return (
        <div>
            <h1>{title}</h1>
            <p>{calories}</p>
            <img src={image}></img>
        <hr/>
        </div>
    )
}
