import React, { ReactElement } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { Logged } from '../reducers/Logged';

import './Navbar.css';


export default function NavBar(): ReactElement {
  const logged = useSelector((state: any) => state.isLogged);
  const dispatch = useDispatch();

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">Nyam Nyam</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>

 
    <ul className="navbar-nav">
        <Link  to="/" ><li className="nav-item">List</li></Link>
        <Link  to="/recipes"><li className="nav-item">New Recipes</li></Link>
        <Link  to="/favorites"><li className="nav-item">Favorites</li></Link>
     
          <>
          <Link className="nav-item" to="/add-product"><li className="nav-item">Add Product</li></Link>
          <Link className="nav-item" to="/profile"><li className="nav-item">Profile</li></Link>
          <Link onClick={()=>dispatch({type: Logged.SIGN_OUT})} className="nav-item" to="/sign-in"><li className="nav-item">Sign Out</li></Link></>
      
          <Link to="/sign-in"><li className="nav-item">Sign in</li></Link>
    
  </ul>
  
</nav>
    )
}
