import Axios from 'axios';
import React, { ReactElement, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Lot from '../LotsList/Lot';
import ErrorBoundary from '../ErrorBoundary';

export default function Favorites(): ReactElement {
    const [productList, setProductList] = useState<any[]>([])

    // const favorites = () => JSON.parse(localStorage.getItem('favorites')||'{}').map(
    //     favorite=>{ 
    //         Axios.post('http://localhost:3001/api/get/product', {
    //         product_id: favorite
    //     }).then((response)=>{
    //         setProductList([...productList, response.data[0]]);
    //     });
    //     }
    // )

    useEffect(()=>{
        JSON.parse(localStorage.getItem('favorites')||'{}').map(
            favorite=>{ 
                Axios.post('http://localhost:3001/api/get/product', {
                product_id: favorite
            }).then((response)=>{
                setProductList([...productList, response.data[0]]);
            });
            }
        )
    },[]);
    
    const lotList = productList.map(lot=><Link to={`lots/${lot.id}`}><Lot key={lot.id} lot={lot} userId={""}></Lot></Link>)
    
    return (
        
        <div>
            <ErrorBoundary>
                {lotList}
            </ErrorBoundary>
        </div>
    )
}
