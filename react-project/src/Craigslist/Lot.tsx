import React, { ReactElement, useState } from 'react'
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
    // if (Math.random()*10<2) throw new Error();
    return(
            <div className="card mb-3">
                 {/* <img src="/images/cake.jpg" className="card-img-top"/> */}
                 <div className="card-body">
                    <h5 className="card-title">{lot.title}</h5>
                    <strong><h3>{lot.price}KZT</h3></strong>
                 </div>
            </div>
            
        )
}
