import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";

function BusinessForm(props) {
    return (
        <div className="wrapper">
            <div className="form-wrapper">
                <h1>Create Business</h1>
                <form onSubmit={props.handleSubmit} noValidate>
                    <div className="businessName">
                        <label htmlFor="businessName">Name of Business</label>
                        <input
                            className={props.businessName.length > 0 ? "error" : null}
                            placeholder="Business Name"
                            type="text"
                            name="businessName"
                            noValidate
                            onChange={props.handleChange}
                        />
                        {props.businessName.length > 0 && (
                            <span className="errorMessage">{props.businessName}</span>
                        )}
                    </div>
                    <div className="address">
                        <label htmlFor="address">Address</label>
                        <input
                            className={props.address.length > 0 ? "error" : null}
                            placeholder="Address"
                            type="text"
                            name="address"
                            noValidate
                            onChange={props.handleChange}
                        />
                        {props.address.length > 0 && (
                            <span className="errorMessage">{props.address}</span>
                        )}
                    </div>
                    <div className="city">
                        <label htmlFor="city">City</label>
                        <input
                            className={props.city.length > 0 ? "error" : null}
                            placeholder="ECity"
                            type="text"
                            name="city"
                            noValidate
                            onChange={props.handleChange}
                        />
                        {props.city.length > 0 && (
                            <span className="errorMessage">{props.city}</span>
                        )}
                    </div>
                    <div className="description">
                        <label htmlFor="description">Description</label>
                        <textarea
                            className={props.description.length > 0 ? "error" : null}
                            placeholder="Description"
                            type="text"
                            name="description"
                            noValidate
                            onChange={props.handleChange}
                        />
                        {props.description.length > 0 && (
                            <span className="errorMessage">{props.description}</span>
                        )}
                    </div>
                    <div className="createAccount">
                        <Link to="/home">
                            Create Account
                        </Link>
                    </div>
                    <div className="login">
                        <Link to="/login">
                            Already Have an Account?
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignupForm;