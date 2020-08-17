import React, { Component } from "react";

class DropdownCategory extends Component {
    constructor(props) {
        super(props);
        this.state = { value: "entertainment" };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit =e => {
        e.preventDefault();
        if (this.state.value != null) {

        }
    }

    handleChange = event => {
        console.log(event.target.value);
        this.setState = ({ value: event.target.value });
    };

    render() {
        return (
            <div>
                <label>
                    Pick your favorite flavor:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="entertainment">Entertainment</option>
                        <option value="fitness">Fitness</option>
                        <option value="restaurant">Restaurant</option>
                        <option value="health/beauty">Health/Beauty</option>
                        <option value="maintenance">Maintenance</option>
                        <option value="miscellaneous">Miscellaneous</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </div>


        );
    }
}

export default DropdownCategory;
