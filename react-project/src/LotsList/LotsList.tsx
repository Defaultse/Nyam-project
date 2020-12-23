import Axios from 'axios';
import React, { ReactElement, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Lot from './Lot' 
import 'bootstrap/dist/css/bootstrap.min.css';
import { GridList } from '@material-ui/core';
import Carousel from './Carousel';

export default function LotsList(): ReactElement {
    const [productList, setProductList] = useState<any[]>([])

    useEffect(()=>{
        Axios.get('http://localhost:3001/api/get').then((response: { data: any; })=>{
          setProductList(response.data);
      })
    },[]);

    const lotList = productList.map(lot=><Link to={`lots/${lot.id}`}><Lot key={lot.id} lot={lot} userId={''}></Lot></Link>)

    return (
      <>
      <Carousel/>
      <GridList cols={4} cellHeight={'auto'} style={{marginTop: '10px'}}>
          {lotList}
      </GridList>
      </>      
    )
}
