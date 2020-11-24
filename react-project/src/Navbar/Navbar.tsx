import React, { ReactElement } from 'react'
import { Link, Redirect } from 'react-router-dom'

// import './Navbar.css';

interface Props {
    // isLogged: boolean,
}

export default function NavBar({}: Props): ReactElement {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Nyam Nyam</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" href="#"><Link to="/" ><li>List</li></Link></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"><Link to="/recipes"><li>New Recipes</li></Link></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"><Link to="/add-product"><li>Add Product</li></Link></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"><Link to="/profile"><li>Profile</li></Link></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"><Link to="/sign-in"><li>Sign in</li></Link></a>
      </li>
    </ul>
  </div>
</nav>
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
