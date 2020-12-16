import React, { ReactElement, useState } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'

export default function SignUp(): ReactElement {
    const [username, setUsernameState] = useState('');
    const [email, setEmailState] = useState('');
    const [password, setPasswordState] = useState('');

    const handleSubmit = () => {
        Axios.post("http://localhost:3001/register-user", {
            username: username,
            email: email,
            password: password
    }).then((response) => {
        window.location.replace('/sign-in')
    });
    };

    return (
        <div className="form-style-5">
            <form>
                <fieldset>
                    <label>username</label>
                    <input type="text" name="username" onChange={(e)=>{
                    setUsernameState(e.target.value)}}
                    />

                    <label>email</label>
                    <input type="text" name="email" onChange={(e)=>{
                    setEmailState(e.target.value)}}
                    />

                    <label>Password</label>
                    <input type="text" name="title" onChange={(e)=>{
                    setPasswordState(e.target.value)}}
                    />
                    

                <button onClick={handleSubmit}>Register</button>
                </fieldset>
            </form>
            <hr></hr>
        </div>
    )
}
