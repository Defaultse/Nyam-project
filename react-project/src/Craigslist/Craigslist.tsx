import Axios from 'axios';
import React, { ReactElement, useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Lot from './Lot'

import './Craigslist.css'

interface Props {
    
}

export default function Craigslist({}: Props): ReactElement {
    // const lots = [
    //     {
    //         id:1, idSeller: 2324, title: "Bicycle", price: 40000, discription:"Brand new bicycle", sold: false
    //     },
    //     {
    //         id:2, idSeller: 22324, title: "Smartphone", price: 400000, discription:"Brand new Apple", sold: false
    //     },

    // ]

    const [productList, setProductList] = useState<any[]>([])

    useEffect(()=>{
        Axios.get('http://localhost:3001/api/get').then((response: { data: any; })=>{
          setProductList(response.data)
          // console.log(response.data)
        })
      },[]);


    const lotList = productList.map(lot=><Link to={`lots/${lot.id}`}><Lot key={lot.id} lot={lot}></Lot></Link>)
   
    return (
        <ul>
            {lotList}
        </ul>            
    )
}
