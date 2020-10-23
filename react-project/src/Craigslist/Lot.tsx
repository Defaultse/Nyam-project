import React, { ReactElement } from 'react'
import './Lot.css'
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
            <div className="box">
                 <img src="/images/cake.jpg"/>
                 <em><h2>{lot.title}</h2></em>
                 <strong><h3>{lot.price}KZT</h3></strong>
            </div>
            
        )
}
