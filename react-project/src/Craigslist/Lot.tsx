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
            <div>
                 {/* <img src="/images/cake.jpg" className="card-img-top"/> */}
                 <div>
                    <h5>{lot.title}</h5>
                    <strong><h3>{lot.price}KZT</h3></strong>
                 </div>
            </div>
            
        )
}
