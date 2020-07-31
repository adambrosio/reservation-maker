import React from "react";
import Foundation from 'react-foundation';

function Form(props) {
    return (
        <form>
            <div class="grid-container">
                <div class="grid-x grid-padding-x">
                    <div class="medium-6 cell">
                        <label>Email
                            <input type="text" placeholder="Email"/>
                        </label>
                    </div>
                    <div class="medium-6 cell">
                        <label>Password
                            <input type="text" placeholder="Password"/>
                        </label>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default Form;