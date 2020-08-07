import React from "react";


function Form(props) {
    return (
        <form>
            <div class="grid-container">
                <div class="grid-x grid-padding-x">
                    <div class="medium-6 cell">
                        <label>{props.name}
                            <input type="text" placeholder={props.name}/>
                        </label>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default Form;