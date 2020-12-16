import Axios from 'axios';
import { stringify } from 'querystring';
import React, { ReactElement, useState, useRef, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { Logged } from '../reducers/Logged';
import './SignIn.css';

export default function SignInState(): ReactElement {
    const [enteredEmail,setEmailState] = useState("")
    const [enteredPassword,setPasswordState] = useState("")
    const dispatch = useDispatch()

    const login = () => {
        Axios.post("http://localhost:3001/login", {
            email: enteredEmail,
            password: enteredPassword,
        }).then((response)=>{
            if (response.data.message) {
                alert("Some Error")
            } else {
                localStorage.setItem('account', JSON.stringify(response.data[0]));
                dispatch({type: Logged.SIGN_IN })
                window.location.replace('/profile')
            }
        });
    };

    const email = useRef<HTMLInputElement>(null)
    const password = useRef<HTMLInputElement>(null);

    useEffect(()=>{
        email.current?.focus();
    }, [])

    return(
        <>
        <div className="form-style-5">
            <form>
                <fieldset>
                    <label>email</label>
                    <input type="text" name="email" onChange={(e)=>{
                    setEmailState(e.target.value)}}
                    ref={email}/>

                    <label>Password</label>
                    <input type="text" name="title" onChange={(e)=>{
                    setPasswordState(e.target.value)}}
                    ref={password}/>
                    

                <button onClick={login}>Submit</button>
                </fieldset>
            </form>
            <hr></hr>

            <Link to="/sign-up" ><strong>Create account</strong></Link>
        </div>
        </>
    )
    
}; 
