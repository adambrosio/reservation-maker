import React from "react";
import Button from "../components/Button/index";
import Form from "../components/Form/index";


function Login() {
    return (
        <div>
            <Form name="Email" />
            <Form name="Password" />
            
                <Button class="button primary" id="submit-btn" name="Submit" />
            
            
                <Button class="button secondary" id="signup-btn" name="Sign Up" />
            
            
        </div>

    );
}

export default Login;
