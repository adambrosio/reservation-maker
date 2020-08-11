import React, { Component } from "react";
import Form from "../Form";
//import Foundation from 'react-foundation';
import Button from "../Button"
import "./style.scss"


function LoginForm(props){
    return (
      <div className = "div">
      <Form name = "Email"></Form>
      <Form name  = "Password"></Form>
      <Button name = "Login" button = "button primary"></Button>
      <Button name = "Signup" button = "button success"></Button>
      </div>
      )
}

export default LoginForm;