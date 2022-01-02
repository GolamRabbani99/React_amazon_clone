import React, { useState, useEffect } from 'react';
import Header from './Header'
import Home from './Home'
import Checkout from "./Checkout"
import Login from "./Login"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {auth,db} from "./firebase"

import {useStateValue} from "./StateProvider"

function App() {
  const [{},dispatch]=useStateValue()
  

  useEffect(() => {
    // load once after component load
    auth.onAuthStateChanged(authUser=> {
      console.log("the user ",authUser)
      if(authUser){
        //the user just logged in / the user was logged in
        //stor the user on react context api
        dispatch({
          type:"SET_USER",
          user:authUser
        })
      }else{
        //the user was logged out
       dispatch({
         type:"SET_USER",
         user:null
       })
      }
    })
  },[]);
  return (
<div className="App">

<BrowserRouter>

<Routes>
<Route path ="/"
  element={<><Header /><Home /></>}
 />

<Route path ="/checkout"
  element={<><Header /><Checkout /></>}
 />
<Route path ="/login"
  element={<Login />}
 />

</Routes>

</BrowserRouter>


    </div>
  );
}

export default App;
