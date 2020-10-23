import Axios from 'axios';
import React, { ReactElement, useEffect, useState } from 'react'
import './LotDetail.css'
interface Props {
    match: any;
}

export default function LotDetail({match}: Props): ReactElement {

    const [productList, setProductList] = useState<any[]>([])

    useEffect(()=>{
        Axios.get('http://localhost:3001/api/get').then((response: {data:any})=>{
          setProductList(response.data)
        })
    },[]);

    return (
        <>
        <div className="container">
            {
                productList.map(product=>{
                    if(product.id==match.params.id && product.status!=true) 
                return(
                <div>
                <h3>Product id:{product.id}</h3>
                <h1>Title: {product.title}</h1>
                <p>Category:{product.category}</p>
                <p>Price: {product.price}</p>
                <p>Description:{product.description}</p>
                </div>)
                
                })
            }
        </div>
        </>
    )
}
