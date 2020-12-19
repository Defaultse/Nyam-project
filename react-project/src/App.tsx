import React, { lazy, Profiler, Suspense, useState } from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import Navbar from './Navbar/Navbar';
// import Recipes from './Recipes/Recipes';
import Profile from './Profile/Profile';
// import LotDetail from './LotDetail/LotDetail';
import SignUp from './Entering/SignUp';
import SignIn  from './Entering/SignIn';
import AddProduct from './AddProduct/AddProduct';
// import Craigslist from './Craigslist/Craigslist';

import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorBoundary from './Recipes/ErrorBoundaryRecepies';
import Favorites from './Favorites/Favorites';

const Recipes = lazy(()=>import('./Recipes/Recipes'));
const Craigslist = lazy(()=>import('./Craigslist/Craigslist'));
const LotDetail = lazy(()=>import('./LotDetail/LotDetail'));
function App() {
  // const callback = (
  //   id: string,
  //   phase: "mount" | "update",
  //   actualDuration: number,
  //   baseDuration: number,
  //   startTime: number,
  //   commitTime: number,
  //   interactions: Set<{id: number; name: string; timestamp: number}>
  // )  => {
  //   console.log('Id:'+id)
  //   console.log('Phase:'+phase)
  //   console.log('Actual duration:'+actualDuration)
  //   console.log('Base duration:'+baseDuration)
  //   console.log('Start time:'+startTime)
  //   console.log('Commit time:'+commitTime)
  //   console.log('Interactions:'+interactions)
  // }


  return (
   <Router>
     <Navbar/>
     <Suspense fallback={<h1>Loading...</h1>}>
      <Switch>
        <Route path='/sign-up' exact component={SignUp}/>
        <Route path='/sign-in' exact component={SignIn}/>
        <Route path='/log-out' exact component={SignIn}/>
        <Route path='/' exact component={Craigslist}/>
        <Route path='/lots/:id' render={(props)=><LotDetail {...props}/>} />
        <Route path='/add-product' exact component={AddProduct}/>
        <Route path='/profile' exact component={Profile}/>
        <Route path='/favorites' exact component={Favorites}/>
        <ErrorBoundary>
          <Route path='/recipes' exact>
            <Recipes/>
          </Route>
        </ErrorBoundary>
        {/* <Profiler id="Craigslist" onRender={callback}>
          <Route path='/' exact>
            <Craigslist/>
          </Route>
        </Profiler> */}
      </Switch>
      </Suspense>
    </Router>   
  ); 
}

export default App;
