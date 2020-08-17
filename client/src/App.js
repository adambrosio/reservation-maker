import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from './pages/Profile';
import Business from './pages/Business';
import CreateBusiness from "./pages/CreateBusiness"
import Search from './pages/Search';
import Navbar from "./components/Navbar";
import 'foundation-sites/dist/css/foundation.min.css';
import './App.css';
import Reserve from "./pages/Reserve"
// import { UserContext } from "./utils/UserContext";
// import ContextProvider from "./utils/ContextProvider";

class App extends Component {

  // <ContextProvider value={UserContext}>

  render() {
    return (
      <Router>
        <div>
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/business/:id" component={Business} />
            <Route exact path="/business/">
              <Redirect to="/search" />
            </Route>
            <Route exact path="/create-business" component={CreateBusiness} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/business/reserve/:id" component={Reserve} />
          </Switch>
        </div>
      </Router>
    );

  }
}

export default App;
