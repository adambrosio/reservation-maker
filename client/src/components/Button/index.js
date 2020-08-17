import React from "react";
//import Foundation from 'react-foundation';

function SubmitBtn(props) {
    return (
        <div className  = "btn">
            <a className={props.button} id = "submit-btn">{props.name}</a>
        </div>
    );
}

export default SubmitBtn;
