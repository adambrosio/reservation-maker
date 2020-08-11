import React from "react";


function LoginSignupForm() {
    return (
        <div className="login-box">
            <div className="row collapse expanded">
                <div className="small-12 medium-6 column small-order-2 medium-order-1">
                    <form className="log-in-form">
                        <h4 className="text-center">Log in with you email account</h4>
                        <label>Email
                            <input type="email" placeholder="somebody@example.com" />
                        </label>
                        <label>Password
                            <input type="password" placeholder="Password" />
                        </label>
                        <input id="show-password" type="checkbox" /><label htmlFor="show-password">Show password</label>
                        <p><input type="submit" className="button expanded" value="Log in" /></p>
                        <p className="text-center"><a href="#">Forgot your password?</a></p>
                    </form>
                    <div className="or">OR</div>
                    <div className="login-box-form-section">
                        <h1 className="login-box-title">Sign up</h1>
                        <input className="login-box-input" type="text" name="username" placeholder="Username" />
                        <input className="login-box-input" type="email" name="email" placeholder="E-mail" />
                        <input className="login-box-input" type="password" name="password" placeholder="Password" />
                        <input className="login-box-input" type="password" name="password2" placeholder="Retype password" />
                        <input className="login-box-submit-button" type="submit" name="signup_submit" value="Sign me up" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginSignupForm;