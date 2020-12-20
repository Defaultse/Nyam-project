import Axios from 'axios';
import React, { ReactElement, useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import Lot from '../Craigslist/Lot';
import ErrorBoundary from '../ErrorBoundary';
import "./Profile.css"

export default function Profile(): ReactElement {
    const account = JSON.parse(localStorage.getItem('account')||'{}');

    const [productList, setProductList] = useState<any[]>([])

    useEffect(()=>{
        Axios.post('http://localhost:3001/api/getUserProducts', {
            owner_id: account.id
        }).then((response)=>{
          setProductList(response.data)
      })
    },[]);
    
    const lotList = productList.map(lot=><Link to={`lots/${lot.id}`}><Lot key={lot.id} lot={lot}></Lot></Link>)

    return (
        <>
            <div className = "info">
                
                <h3 className="profile">Profile info:</h3>
                <h5 className = "email"> Your email:{account.email}</h5>
                <p className = "id">Account id:{account.id}</p>
                <h3 className = "lots">Your lots:</h3>
                <div className="container">
                    <ErrorBoundary>
                        {lotList}
                    </ErrorBoundary>
                </div>
            </div>
            <hr/>
            
        </>
    )
}
