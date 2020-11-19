import React, { useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import Navbar from './Navbar/Navbar';
import Recepies from './Recepies/Recepies';
import Profile from './Profile/Profile';
import LotDetail from './LotDetail/LotDetail';


import { SignUp } from './Entering/SignUp';
import SignIn  from './Entering/SignIn';
import AddProduct from './AddProduct/AddProduct';
import Craigslist from './Craigslist/Craigslist';

function App() {

  // const isLogged = true;

  return (
   <Router>
     <div className="container">
     {/* <Navbar isLogged={isLogged}/> */}
     <Navbar/>
      <Switch>
        <Route path='/sign-up' exact component={SignUp}/>
        <Route path='/sign-in' exact component={SignIn}/>
        <Route path='/log-out' exact component={SignIn}/>
        <Route path='/' exact component={Craigslist}/>
        <Route path='/lots/:id' render={(props)=><LotDetail {...props}/>} />
        <Route path='/add-product' exact component={AddProduct}/>
        <Route path='/recepies' exact component={Recepies}/>
        <Route path='/profile' exact component={Profile}/>
      </Switch>

      </div>
    </Router>   
    // <SignUp/>
    // <SignIn/>
  ); 


}

export default App;
