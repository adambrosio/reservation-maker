import React from "react";


function Form(props) {
    return (
        <form>
            <div className="grid-container">
                <div className="grid-x grid-padding-x">
                    <div className="medium-6 cell">
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