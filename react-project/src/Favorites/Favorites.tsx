import Axios from 'axios';
import React, { ReactElement, useEffect, useState } from 'react'

export default function Favorites(): ReactElement {
    const [productList, setProductList] = useState<any[]>([])
    const [produtsId, setProductsId] = useState<any[]>([])

    const favorites = JSON.parse(localStorage.getItem('favorites')||'{}').map(
        favorite=>{ setProductsId([...produtsId, favorite])}
    )

    useEffect(()=>{
        Axios.post('http://localhost:3001/api/get/product', {
            product_id: produtsId[produtsId.length-1]
        }).then((response)=>{
            setProductList([...productList, response]);
        });
    },[favorites]);
    
    return (
        <div>
            <h1>sad</h1>
        </div>
    )
}
