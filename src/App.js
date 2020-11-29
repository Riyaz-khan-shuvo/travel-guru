import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Banner from './Components/Banner/Banner';
import Login from './Components/Login/Login';
import NewAccount from './Components/NewAccount/NewAccount';
import Booking from './Components/Booking/Booking';
import DestinationDetail from './Components/DestinationDetail/DestinationDetail';
import NoMatch from './Components/NoMatch/NoMatch';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import { createContext } from 'react';
import Hotel from './Components/Hotel/Hotel'
import { useState } from 'react';
export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <div className="App">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Switch>
            <Route path="/home">
              <Banner></Banner>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/booking">
              <Booking></Booking>
            </Route>
            <Route path="/destination/:destinationName">
              <DestinationDetail></DestinationDetail>
            </Route>
            <Route path="/createAccount">
              <NewAccount></NewAccount>
            </Route>
            <PrivateRoute path="/hotel/:destinationName">
              <Hotel />
            </PrivateRoute>
            <Route exact path="/">
              <Banner></Banner>
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
