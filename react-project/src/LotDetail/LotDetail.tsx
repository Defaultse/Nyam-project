import Axios from 'axios';
import React, { FormEvent, ReactElement, useEffect, useReducer, useState } from 'react'
import Comment from './Comment';

export enum Actions {
    ADD_COMMENT,
    DELETE_COMMENT
}

export interface CommentI {
    id: number;
    author: string;
    description: string;
}

export interface Action {
    type: Actions;
    payload: any;
}

function reducer(comments: CommentI[], action: Action){
    switch (action.type) {
        case Actions.ADD_COMMENT:
            return [...comments, addComment(action.payload.description)];
        case Actions.DELETE_COMMENT:
            return comments.filter((comment) => comment.id !== action.payload.id);
        default:
            return comments;
    }
}

function addComment(description: string): CommentI{
    const account = JSON.parse(localStorage.getItem('account')||'{}');
    return { id: Date.now(), description, author: account.email }
}

export default function LotDetail({match}): ReactElement {
    const [productDetails, setProductDetails] = useState<any>([]);
    const [comments, dispatch] = useReducer(reducer, []);
    const [description, setDescription] = useState("");
    const account = JSON.parse(localStorage.getItem('account')||'{}');

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

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        // payload: account.id
        e.preventDefault();
        dispatch({ type: Actions.ADD_COMMENT, payload: {description: description} });
        setDescription("");
    }

    return (  
        <>
        <div>
            <img src="/images/demo.jpg" />
            <h3>Product id:{productDetails.id}</h3>
            <h1>Title: {productDetails.title}</h1>
            <p>Price: {productDetails.price}</p>
            <p>Description:{productDetails.description}</p>
            <p>Owner: {productDetails.owner_id}</p>
            <button onClick={addToFav}>Add to Favorite</button>
        </div>
        <div>
            <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
            </form>
            {comments.map((comment) => {
               return <Comment key={comment.id} comment={comment} dispatch={dispatch} />;
            })}
        </div>

        </>
    )
}
