import React, { Component } from "react";
import 'foundation-sites/dist/css/foundation.min.css';
import Home from "./pages/home";
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Profile from './pages/profile'
//import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Home accountName = "MattF"></Home>
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          </Switch>
     </Router>
    )
  }
}

export default App;
