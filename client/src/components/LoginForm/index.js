import React, { Component } from "react";


function LoginForm(props) {

    return (
      <div className="base-container" ref={props.containerRef}>
        <div className="header">Login</div>
        <div className="content">
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" id="username"/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" id="password"/>
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn" onClick={ e => {
            e.preventDefault();
            const formData = {
              username: document.querySelector("#username").value,
              password: document.querySelector("#password").value
            }

            console.log(formData);

            fetch('/api/login', {
              method: 'POST',
              body: JSON.stringify(formData),
              headers: { 'Content-Type': 'application/json' }
            })
            .then(response => response.json())
            .then(data => {
              console.log(data);
              window.location = '/';
            })

          }}>
            Login
          </button>
        </div>
      </div>
    );

}

export default LoginForm;
