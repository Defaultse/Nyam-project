import Axios from 'axios';
import { stringify } from 'querystring';
import React, { ReactElement, useState, useRef, useEffect } from 'react'
import { Link } from "react-router-dom";
import './SignIn.css';

interface Props {

}

interface SignIn {
    email: string,
    password: string
}

export default function SignInState({}: Props): ReactElement {
    const [enteredEmail,setEmailState] = useState("")
    const [enteredPassword,setPasswordState] = useState("")

    const [loginStatus, setLoginStatus] = useState("")

    const login = () => {
        Axios.post("http://localhost:3001/login", {
            email: enteredEmail,
            password: enteredPassword,
        }).then((response)=>{
            if (response.data.message) {
                setLoginStatus(response.data.message)
                console.log("logged");
            } else {
                setLoginStatus(response.data[0].email)
            }
        });
    };

    const email = useRef<HTMLInputElement>(null)
    const password = useRef<HTMLInputElement>(null);

    useEffect(() => {
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
                
        <h1>{loginStatus}</h1>
                </fieldset>
            </form>
            <hr></hr>

            <Link to="/sign-up" ><strong>Create account</strong></Link>
        </div>
        </>
    )
    
}; 
