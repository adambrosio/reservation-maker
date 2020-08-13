import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import DateTimePicker from '../DateTimePicker';

function SignupForm(props) {

    const submit = props.handleSubmit;

    return (
        <div className="wrapper">

        <div className="form-wrapper">
            <h1>Create Account</h1>
            <form noValidate>
                <div className="username">
                    <label htmlFor="username">Username</label>
                    <input
                        placeholder="Username"
                        type="text"
                        id="username"
                        name="username"
                        noValidate
                        onChange={props.handleChange}
                    />
                </div>
                <div className="firstName">
                    <label htmlFor="firstName">First Name</label>
                    <input
                        className={props.firstName.length > 0 ? "error" : null}
                        placeholder="First Name"
                        type="text"
                        id="firstName"
                        name="firstName"
                        noValidate
                        onChange={props.handleChange}
                    />
                    {props.firstName.length > 0 && (
                        <span className="errorMessage">{props.firstName}</span>
                    )}
                </div>
                <div className="lastName">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        className={props.lastName.length > 0 ? "error" : null}
                        placeholder="Last Name"
                        type="text"
                        id="lastName"
                        name="lastName"
                        noValidate
                        onChange={props.handleChange}
                    />
                    {props.lastName.length > 0 && (
                        <span className="errorMessage">{props.lastName}</span>
                    )}
                </div>
                <div className="email">
                    <label htmlFor="email">Email</label>
                    <input
                        className={props.email.length > 0 ? "error" : null}
                        placeholder="Email"
                        type="email"
                        id="email"
                        name="email"
                        noValidate
                        onChange={props.handleChange}
                    />
                    {props.email.length > 0 && (
                        <span className="errorMessage">{props.email}</span>
                    )}
                </div>
                <div className="password">
                    <label htmlFor="password">Password</label>
                    <input
                        className={props.password.length > 0 ? "error" : null}
                        placeholder="Password"
                        type="password"
                        id="password"
                        name="password"
                        noValidate
                        onChange={props.handleChange}
                    />
                    {props.password.length > 0 && (
                        <span className="errorMessage">{props.password}</span>
                    )}
                </div>
                <DateTimePicker id="dtp" name="dob"/>

                <div className="createAccount">
                    <button onClick={submit}>
                        Create Account
                    </button>
                </div>
                <div className="login">
                    <Link to="/login">
                      <button>
                        Already Have an Account?
                      </button>
                    </Link>
                </div>
            </form>
        </div>
      </div>
    );
}

export default SignupForm;
