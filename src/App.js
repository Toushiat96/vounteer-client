import React, { createContext } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Event from './Components/Event/Event';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import { useState } from 'react';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import RegisterEvent from './Components/RegisterEvent/RegisterEvent';
import Admin from './Components/Admin/Admin';


export const userContext = createContext();

function App() {

  const [loggedInUser , setLoggedInUser]= useState({});

  return (
    <userContext.Provider value={[loggedInUser , setLoggedInUser]}>
    <Router>
    <Switch>
   <Route exact path="/" >
   <Home></Home>
   </Route>
   
   <Route path="/home" >
   <Home></Home>
   </Route>
   
   <Route path="/events" >
   <Event></Event>
   </Route>
   <PrivateRoute path="/registerevent/:id">
   <RegisterEvent></RegisterEvent>
   </PrivateRoute>
   
   <Route path = "/admin">
   <Admin></Admin>
   
   </Route>
   
   <Route path="/login">
   <Login></Login>
   </Route>
   </Switch>
    </Router>
    
    </userContext.Provider>
  );
}

export default App;
