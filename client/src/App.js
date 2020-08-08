import React, { Component } from "react";
import logo from "./logo.svg";
import Form from "./components/Form";
import Button from "./components/Button";
import { TopBar, TopBarRight, TopBarLeft } from 'react-foundation';
import { Menu, MenuItem, MenuText } from 'react-foundation';
import Login from "./components/loginPage";
import { Router } from "react-router-dom";
import 'foundation-sites/dist/css/foundation.min.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import Home from "./pages/home";
import Jumbotron from "./components/Jumbotron"
//import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
     <Home></Home>
    )
  }
}

export default App;
