import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from './pages/Profile';
import Business from './pages/Business';
import Search from './pages/Search';
// import SearchResults from './pages/SearchResults';
import 'foundation-sites/dist/css/foundation.min.css';
import './App.css';
import Reserve from "./pages/Reserve"


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/business/:id" component={Business} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/business/reserve/:id" component={Reserve} />
          </Switch>
        </div>
      </Router>
    );

  }
}

export default App;
