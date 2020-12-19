import React, { ReactElement, useState } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'
import './SignUp.css'
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
        <div className="container1">
            <form>
                <fieldset>
                    <div className="username">
                    <label>Username</label>
                    <input type="text" name="username" onChange={(e)=>{
                    setUsernameState(e.target.value)}}
                    />
                    </div>
                    <div className="email">
                    <label>Email</label>
                    <input type="text" name="email" onChange={(e)=>{
                    setEmailState(e.target.value)}}
                    />
                    </div>
                    <div className="password">
                    <label>Password</label>
                    <input type="text" name="title" onChange={(e)=>{
                    setPasswordState(e.target.value)}}
                    />
                    </div>
                        <div className="register">
                <button onClick={handleSubmit}>Register</button>
                </div>
                </fieldset>
            </form>
            <hr></hr>
        </div>
    )
}
