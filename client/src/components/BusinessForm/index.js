import React from "react";
import { Link } from "react-router-dom";
import DropdownState from "../DropdownState";
import "../../App.css";

function BusinessForm(props) {
    const submit = props.handleSubmit;

    return (
        <div className="wrapper">
            <div className="form-wrapper">
                <h1>Create Business</h1>
                <form onSubmit={props.handleSubmit} noValidate>
                    <div className="business_name">
                        <label htmlFor="business_name">
                            Name of Business
                        </label>
                        <input
                            className={props.business_name.length > 0 ? "error" : null}
                            placeholder="Business Name"
                            type="text"
                            name="business_name"
                            noValidate
                            onChange={props.handleChange}
                        />
                        {props.business_name.length > 0 && (
                            <span className="errorMessage">{props.business_name}</span>
                        )}
                    </div>
                    <div className="category">
                        <label>
                            Choose a Category:
                            <select value={props.category.value} onChange={props.handleDropChange}>
                                <option value="entertainment">Entertainment</option>
                                <option value="fitness">Fitness</option>
                                <option value="restaurant">Restaurant</option>
                                <option value="health/beauty">Health/Beauty</option>
                                <option value="maintenance">Maintenance</option>
                                <option value="miscellaneous">Miscellaneous</option>
                            </select>
                        </label>
                    </div>
                    <div className="city">
                        <label htmlFor="city">
                            City
                        </label>
                        <input
                            className={props.city.length > 0 ? "error" : null}
                            placeholder="City"
                            type="text"
                            name="city"
                            noValidate
                            onChange={props.handleChange}
                        />
                        {props.city.length > 0 && (
                            <span className="errorMessage">{props.city}</span>
                        )}
                    </div>
                    <DropdownState/>
                    <div className="street">
                        <label htmlFor="street">Street</label>
                        <input
                            className={props.street.length > 0 ? "error" : null}
                            placeholder="Street"
                            type="text"
                            name="street"
                            noValidate
                            onChange={props.handleChange}
                        />
                        {props.street.length > 0 && (
                            <span className="errorMessage">{props.street}</span>
                        )}
                    </div>
                    <div className="createBusiness">
                        <button onClick={submit}>
                            Create Business
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default BusinessForm;