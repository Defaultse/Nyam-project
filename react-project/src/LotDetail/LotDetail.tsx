import Axios from 'axios';
import React, { ReactElement, useEffect, useState } from 'react'

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
        <div>
            {
                productList.map(product=>{
                    if(product.id==match.params.id && product.status!=true) 
                return <div>{product.id}{product.title}{product.price}{product.description}{product.category}</div>
                })
            }
        </div>
    )
}
