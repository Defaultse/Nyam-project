import Axios from 'axios';
import React, { ReactElement, useEffect, useState } from 'react'
import './LotDetail.css'

interface Props {
    match: any;
}

export default function LotDetail({match}: Props): ReactElement {
    const [productDetails, setProductDetails] = useState<any>([]);

    useEffect(()=>{
        Axios.post('http://localhost:3001/api/get/product', {
            product_id: match.params.id
        }).then((response)=>{
            setProductDetails(response.data[0])
        });
    },[]);

    const addToFav = () => {
        var old = JSON.parse(localStorage.getItem('favorites') || '{}');
        old.push(productDetails.id);
        localStorage.setItem('favorites', JSON.stringify(old))
        // alert()
        // console.log(JSON.parse(localStorage.getItem('favorites') || '{}'))
    }

    return (
        <>
        <h3>Product id:{productDetails.id}</h3>
        <h1>Title: {productDetails.title}</h1>
        <p>Price: {productDetails.price}</p>
        <p>Description:{productDetails.description}</p>
        <p>Owner: {productDetails.owner_id}</p>
        <button onClick={addToFav}>Add to Favorite</button>

        {/* <div className="container">
            {
                productDetails.map(product=>{
                    if(product.id==product_id && product.is_sold!==true) 
                return(
                <div>
                    {match.params.id}
                <h3>Product id:{product.id}</h3>
                <h1>Title: {product.title}</h1>
                <p>Price: {product.price}</p>
                <p>Description:{product.description}</p>
                <p>Owner: {product.owner_id}</p>
                </div>)
                })
            }
        </div> */}
        </>

    )
}
