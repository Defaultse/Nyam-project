import Axios from 'axios';
import React, { ReactElement, useEffect, useState } from 'react'
import './LotDetail.css'

interface Props {
    match: any;
}

export default function LotDetail({match}: Props): ReactElement {
    // const lots = [
    //     {
    //         id: match.params.id, idSeller: 2324, title: "Bicycle", price: 40000, discription:"Brand new bicycle", sold: false
    //     }
    // ]

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
    }

    return (
        <>
        <h3>Product id:{productDetails.id}</h3>
        <h1>Title: {productDetails.title}</h1>
        <p>Price: {productDetails.price}</p>
        <p>Description:{productDetails.description}</p>
        <p>Owner: {productDetails.owner_id}</p>
        <button onClick={addToFav}>Add to Favorite</button>
        </>
        // <>
        // <h3>Product id:{lots.id}</h3>
        // <h1>Title: {lots.title}</h1>
        // <p>Price: {lots.price}</p>
        // <p>Description:{lots.description}</p>
        // <p>Owner: {lots.owner_id}</p>
        // <button onClick={addToFav}>Add to Favorite</button>
        // </>
    )
}
