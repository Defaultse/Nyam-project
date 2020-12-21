import React, { lazy, Suspense } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './Navbar/Navbar';
import SignUp from './Auth/SignUp';
// import LotDetail from "./LotDetail/LotDetail";
import SignIn  from './Auth/SignIn';
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorBoundaryApi from './Recipes/ErrorBoundaryRecepies';
// import ErrorBoundary from './LotsList/ErrorBoundary';
// import LotsList from './LotsList/LotsList';
// import LotDetail from './LotDetail/LotDetail';
// import AddProduct from './AddProduct/AddProduct';
// import Recipes from './Recipes/Recipes';
// import Profile from './Profile/Profile';
// import Favorites from './Favorites/Favorites';

const Recipes = lazy(()=>import("./Recipes/Recipes"));
const LotsList = lazy(()=>import("./LotsList/LotsList"));
const Profile = lazy(()=>import("./Profile/Profile"));
const LotDetail = lazy(()=>import("./LotDetail/LotDetail"));
const AddProduct = lazy(()=>import("./AddProduct/AddProduct"));
const Favorites = lazy(()=>import("./Favorites/Favorites"));

function App() {
  return (
   <Router>
     <Navbar/>
     <Suspense fallback="loading...">
      <Switch>
        <Route path='/sign-up' exact component={SignUp}/>
        <Route path='/sign-in' exact component={SignIn}/>
        <Route path='/log-out' exact component={SignIn}/>
        {/* <ErrorBoundary>  */}
          <Route path='/' exact component={LotsList}/>
        {/* </ErrorBoundary> */}
        <Route path='/lots/:id' render={(props)=><LotDetail {...props}/>} />
        <Route path='/add-product' exact component={AddProduct}/>
        <Route path='/profile' exact component={Profile}/>
        <Route path='/favorites' exact component={Favorites}/>
        <ErrorBoundaryApi>
          <Route path='/recipes' exact component={Recipes}/>
        </ErrorBoundaryApi>
      </Switch>
      </Suspense>
    </Router>   
  ); 
}

export default App;
