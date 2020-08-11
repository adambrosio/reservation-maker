import React from "react";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Test from "./pages/test";

import logo from "./logo.svg";
import "./App.css";


function App() {

    return (
      <div className="App">
        <Login/>
        <Signup/>
        <Test/>
        
      </div>
    );
  
}

export default App;
