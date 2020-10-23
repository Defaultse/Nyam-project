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

    function validateInput(){
        let validated = true;
        if(!signinEmail ||signinEmail===" "||signinEmail===""){
          alert("Re-enter email")
          validated=false;
          email.current?.focus()
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

                <button onClick={()=>validateInput()}>Submit</button>

                </fieldset>
            </form>
            <br/>
            <hr></hr>

            <Link to="/sign-up" ><strong>Create account</strong></Link>
        </div>
        </>
    )
    
}; 
