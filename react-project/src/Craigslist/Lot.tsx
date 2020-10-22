import React, { ReactElement } from 'react'

interface Props {
    lot: Lot
}

interface Lot{
    id: number,
    title: string,
    price: number
}

export default function Lot({lot}: Props): ReactElement {
        return(
            <div>
                <h2>{lot.id}{lot.title}{lot.price}</h2>
            </div>
            
        )
}
