import React, { ReactElement, useState, useRef, useEffect } from 'react'
import Axios from 'axios';

import './AddProduct.css';

interface Props {
    
}

interface Product{
    title: string,
    description: string,
    price: number
}

export default function AddProduct({}: Props): ReactElement {
    // let product: Product = {title:"", description:"", price: 0}

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

    function validateInput(){
        let validated = true;
        if(!productTitle ||productTitle===" "||productTitle===""){
          alert("Re-enter title")
          validated=false;
          title.current?.focus()
        }
        if(productDescription.length>30==true){
          alert("Re-enter description")
          validated=false;
          description.current?.focus()
        }
        if(!productPrice){
            alert("Re-enter price")
            validated=false;
            price.current?.focus()
        }
        if(validated){
            handleSubmit();
        }
      }

    const title = useRef<HTMLInputElement>(null)
    const price = useRef<HTMLInputElement>(null);
    const description = useRef<HTMLInputElement>(null);

    useEffect(() => {
        title.current?.focus();
    }, [])

    return (
            <form className="container">
                <div className="form-group">
                    <label>Title</label>
                    <input className="form-control" type="text" name="title" onChange={(e)=>{
                    setProductTitle(e.target.value)}}
                    ref={title}/>
                </div>
                <div className="form-group">
                    <label>Set category</label>
                    <select className="form-control" onChange={(e)=>{
                    setProductCategory(e.target.value)
                     }}>
                        <option value="bread">Bread</option>
                        <option value="cakes">Cakes</option>
                        <option value="else">Something else</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Price</label>
                    <input className="form-control" type="text" name="price" onChange={(e)=>{
                    setProductPrice(e.target.value)}}
                    ref={price}/>
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea className="form-control" name="description" onChange={(e)=>{
                    setProductDescription(e.target.value);}}
                     />
                </div>
                <button className="btn btn-secondary" onClick={()=>validateInput()}>Submit</button>

            </form>
    )
}
