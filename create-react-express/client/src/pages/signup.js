import React from "react";
import Button from "../components/Button/index";
import Form from "../components/Form/index";
import Dropdown from "../components/Dropdown/index";
import Calendar from "../components/Calendar/index"

function Signup() {
    return (
        <div>
            <Form name="First Name" />
            <Form name="Last Name" />
            <Form name="Email" />
            <Form name="Password" />
            <Calendar/>
        </div>

    );
}

export default Signup;