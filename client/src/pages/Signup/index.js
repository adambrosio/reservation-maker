import React, { Component } from "react";
import SignupForm from "../../components/SignupForm";
import "../../components/signupTest.css";

const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
    let valid = true;

    // validate form errors being empty
    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false);
    });

    // validate the form was filled out
    Object.values(rest).forEach(val => {
        val === null && (valid = false);
    });

    return valid;
};

class Signup extends Component {
    state = {
        firstName: null,
        lastName: null,
        email: null,
        password: null,
        formErrors: {
            firstName: "",
            lastName: "",
            email: "",
            password: ""
        }
    };

    handleSubmit = e => {
        e.preventDefault();

        console.log('inside function');

        if (formValid(this.state)) {
            console.log(`
            --SUBMITTING--
            ${this.state.username}
            ${this.state.dob}
            First Name: ${this.state.firstName}
            Last Name: ${this.state.lastName}
            Email: ${this.state.email}
            Password: ${this.state.password}
        `);
            fetch('/api/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: this.state.username,
                    name: `${this.state.firstName}  ${this.state.lastName}`,
                    email: this.state.email,
                    password: this.state.password,
                    dob: this.state.dob
                })
            })
                .then(response => response.json())
                .then(data => data)
                .then(window.location = '/');
        } else {
            console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
        }
    };

    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = { ...this.state.formErrors };

        switch (name) {
            case "firstName":
                formErrors.firstName =
                    value.length < 3 ? "minimum 3 characaters required" : "";
                break;
            case "lastName":
                formErrors.lastName =
                    value.length < 3 ? "minimum 3 characaters required" : "";
                break;
            case "email":
                formErrors.email = emailRegex.test(value)
                    ? ""
                    : "invalid email address";
                break;
            case "password":
                formErrors.password =
                    value.length < 6 ? "minimum 6 characaters required" : "";
                break;
            default:
                break;
        }

        this.setState({ formErrors, [name]: value }, () => console.log(this.state));
    };

    render() {
        return (
            <div>
                <SignupForm
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    firstName={this.state.formErrors.firstName}
                    lastName={this.state.formErrors.lastName}
                    email={this.state.formErrors.email}
                    password={this.state.formErrors.password}
                />
            </div>
        );
    }
}
export default Signup;
