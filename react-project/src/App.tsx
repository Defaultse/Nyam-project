import React, { useState } from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import Navbar from './Navbar/Navbar';
import Recipes from './Recipes/Recipes';
import Profile from './Profile/Profile';
import LotDetail from './LotDetail/LotDetail';
import './App.css'; 

import SignUp from './Entering/SignUp';
import SignIn  from './Entering/SignIn';
import AddProduct from './AddProduct/AddProduct';
import Craigslist from './Craigslist/Craigslist';

import 'bootstrap/dist/css/bootstrap.min.css';
import Favorites from './Favorites/Favorites';

function App() {

  // const isLogged = true;

  return (
   <Router>
     <>
     {/* <Navbar isLogged={isLogged}/> */}
     <Navbar/>
      <Switch>
        <Route path='/sign-up' exact component={SignUp}/>
        <Route path='/sign-in' exact component={SignIn}/>
        <Route path='/log-out' exact component={SignIn}/>
        <Route path='/' exact component={Craigslist}/>
        <Route path='/lots/:id' render={(props)=><LotDetail {...props}/>} />
        <Route path='/add-product' exact component={AddProduct}/>
        <Route path='/recipes' exact component={Recipes}/>
        <Route path='/profile' exact component={Profile}/>
        <Route path='/favorites' exact component={Favorites}/>
      </Switch>

      </>
    </Router>   
    // <SignUp/>
    // <SignIn/>
  ); 


}

export default App;
