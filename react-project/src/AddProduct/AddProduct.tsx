import React, { ReactElement, useState } from 'react'

import Axios from 'axios';

interface Props {
    
}

export default function AddProduct({}: Props): ReactElement {
    const [productTitle, setProductTitle] = useState("")
    const [productCategory, setProductCategory] = useState("")
    const [productPrice, setProductPrice] = useState("")
    const [productDescription, setProductDescription] = useState("")

    const handleSubmit = () => {
        Axios.post("http://localhost:3001/api/insert", {
            productOwner:'1',
            productStatus: '0',

            productTitle: productTitle,
            productCategory: productCategory,
            productPrice: productPrice,
            productDescription: productDescription,
    });
    };


    return (
        <div>
            <h1>Adding a product</h1>
            
            <div className="form">
                <label>Title</label>
                <input type="text" name="title" onChange={(e)=>{
                    setProductTitle(e.target.value)
                }}/>

                <label>Set category</label>
                <select onChange={(e)=>{
                    setProductCategory(e.target.value)
                }}>
                        <option value="bread">Bread</option>
                        <option value="cakes">Cakes</option>
                        <option value="else">Something else</option>
                </select>
                {/* <input type="text" name="category" onChange={(e)=>{
                    setProductCategory(e.target.value)
                }}/> */}

                <label>Price</label>
                <input type="text" name="price" onChange={(e)=>{
                    setProductPrice(e.target.value)
                }}/>


                <label>Description</label>
                <textarea name="description" onChange={(e)=>{
                    setProductDescription(e.target.value)
                }}/>

                <button onClick={handleSubmit}>Submit</button>

            </div>
        </div>
    )
}
