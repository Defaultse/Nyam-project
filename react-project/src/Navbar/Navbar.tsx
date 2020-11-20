import React, { ReactElement } from 'react'
import { Link, Redirect } from 'react-router-dom'
import './Navbar.css';

interface Props {
    // isLogged: boolean,
}

export default function NavBar({}: Props): ReactElement {
    return (
        <div className="nav">
            <ul>
                <Link to="/" >
                    <li>List</li>
                </Link>
                <Link to="/recipes">
                    <li>New Recipes</li>
                </Link>
                <Link to="/add-product">
                    <li>Add Product</li>
                </Link>
                <Link to="/profile">
                    <li>Profile</li>
                </Link>
                <Link to="/sign-in">
                    <li>Sign in</li>
                </Link>
            </ul>
        </div>
    )
    // if(isLogged==false){
    //     return (
    //         <div className="nav">
    //             <ul>
    //                 <Link to="/lots">
    //                     <li>Main</li>
    //                 </Link>
    //                 <Link to="/recepies">
    //                     <li>New Recipes</li>
    //                 </Link>
    //                 <Link to="/sign-in">
    //                     <li>Sign in</li>
    //                 </Link>
    //             </ul>
    //         </div>
    //     )
    // }

    // else {
    //     return (
    //         <div className="nav">
    //             <ul>
    //                 <Link to="/lots">
    //                     <li>Main</li>
    //                 </Link>
    //                 <Link to="/recepies">
    //                     <li>New Recipes</li>
    //                 </Link>
    //                 <Link to="/profile">
    //                     <li>Profile</li>
    //                 </Link>
    //                 <Link to="/log-out">
    //                     <li>Log out</li>
    //                 </Link>
    //             </ul>
    //         </div>
    //     )
    // }
    
}
