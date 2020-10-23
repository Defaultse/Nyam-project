import Axios from 'axios';
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

    const [signinEmail,signinEmailState ] = useState("")
    const [signinPassword,signinPasswordState ] = useState("")
    const [PassFromDB, setPassFromDB] = useState("")

    function validateInput(){
        let validated = true;
        if(!signinEmail ||signinEmail===" "||signinEmail===""){
          alert("Re-enter email")
          validated=false;
          email.current?.focus()
        }
        if(validated){
            Axios.get("http://localhost:3001/api/get/pass/"+signinEmail).then(response=>(
                setPassFromDB(response.data)
            ))
            // if(PassFromDB==signinPassword){
                alert(signinEmail);
                alert(PassFromDB);
                alert(signinPassword);
            // }
        }
      }

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
                    signinEmailState(e.target.value)}}
                    ref={email}/>

                    <label>Password</label>
                    <input type="text" name="title" onChange={(e)=>{
                    signinPasswordState(e.target.value)}}
                    ref={password}/>

                <button onClick={()=>validateInput()}>Submit</button>

                </fieldset>
            </form>
            <hr></hr>

            <Link to="/sign-up" ><strong>Create account</strong></Link>
        </div>
        </>
    )
    
}; 
