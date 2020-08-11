import React from "react";


function Button(props) {
    return (
        <div className="btn">
            <a className={props.class} id={props.id} href="#">{props.name}</a>
        </div>
    );
}

export default Button;