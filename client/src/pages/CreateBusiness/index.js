import React, { Component } from "react";
import BusinessForm from "../../components/BusinessForm";
import "../../components/signupTest.css";


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

class CreateBusiness extends Component {
    state = {
        business_name: null,
        category: {
            value: "entertainment"
        },
        city: null,
        state: {
          value: null
        },
        street: null,
        formErrors: {
            business_name: "",
            category: "",
            city: "",
            street: "",
            state: ""
        }
    };

    handleSubmit = e => {
        e.preventDefault();

        console.log('inside function');

        if (formValid(this.state)) {
            console.log(`
            --SUBMITTING--
            Business Name: ${this.state.business_name}
            Category: ${this.state.category}
            City: ${this.state.city}
            State: ${this.state.state}
            Street: ${this.state.street}
        `);
            fetch('/api/business', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    business_name: this.state.business_name,
                    category: this.state.category.value,
                    city: this.state.city,
                    state: this.state.state,
                    street: this.state.street
                })
            })
                .then(response => response.json())
                .then(data => data)
            // .then(window.location = '/');
        } else {
            console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
        }
    };

    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = { ...this.state.formErrors };

        switch (name) {
            case "business_name":
                formErrors.business_name =
                    value.length < 3 ? "minimum 3 characaters required" : "";
                break;
            case "category":
                formErrors.category =
                    value.length < 3 ? "must choose a category" : "";
                break;
            case "city":
                formErrors.city =
                    value.length < 3 ? "minimum 3 characaters required" : "";
                break;
            case "street":
                formErrors.street =
                    value.length < 6 ? "minimum 6 characaters required" : "";
                break;
            default:
                break;
        }

        this.setState({ formErrors, [name]: value }, () => console.log(this.state));
    };

    handleDropdownChange = e => {
        this.setState({ value: e.target.value });
    }

    render() {
        return (
            <div>
                <BusinessForm
                    handleChange={this.handleChange}
                    handleDropdownChange={this.handleDropdownChange}
                    handleSubmit={this.handleSubmit}
                    business_name={this.state.formErrors.business_name}
                    category={this.state.formErrors.category}
                    city={this.state.formErrors.city}
                    street={this.state.formErrors.street}
                    state={this.state.state}
                />
            </div>
        );
    }
}
export default CreateBusiness;
