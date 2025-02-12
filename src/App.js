import React, { useEffect, useState } from "react"
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout'
import Login from './Login';
import { BrowserRouter as Router, Switch, Route}
from "react-router-dom";
import { auth } from './firebase'
import { useStateValue } from "./StateProvider";

function App() {

  const[{},dispatch] = useStateValue();
  
  useEffect(() => {
    //will only run once the app component loads

    auth.onAuthStateChanged(authUser => {
      console.log("The user is -> ",authUser)
      if(authUser){
        // the user just logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else{
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  },[])
  return (
    // BEM
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/checkout">
            <Header/>
            <Checkout/>
          </Route>
          <Route path="/">
            <Header/>
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
