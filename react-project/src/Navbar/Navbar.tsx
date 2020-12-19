import React, { ReactElement } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { Logged } from '../reducers/Logged';

import './Navbar.css';


export default function NavBar(): ReactElement {
  const logged = useSelector((state: any) => state.isLogged);
  const dispatch = useDispatch();

    return (
      <div className='nav1'>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">Nyam Nyam</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>

  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
        <Link className="nav-item" to="/" ><li>List</li></Link>
        <Link className="nav-item-new" to="/recipes"><li>New Recipes</li></Link>
        {logged===true ? (
          <>
          <Link className="nav-item" to="/add-product"><li>Add Product</li></Link>
          <Link className="nav-item" to="/profile"><li>Profile</li></Link>
          <Link onClick={()=>dispatch({type: Logged.SIGN_OUT})} className="nav-item" to="/sign-in"><li>Sign Out</li></Link></>
        ) : (
          <Link className="nav-item-sign" to="/sign-in"><li>Sign in</li></Link>
        ) }
  </ul>
  </div>
</nav>
</div>
    )
}
