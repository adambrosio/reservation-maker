import React from "react";


function Button(props) {
    return (
        <div class="btn">
            <a class={props.class} id={props.id} href="#">{props.name}</a>
        </div>
    );
}

export default Button;