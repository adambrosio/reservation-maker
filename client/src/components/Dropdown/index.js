import React from "react";


function Dropdown(props) {
    return (
        <ul class="dropdown menu" data-dropdown-menu>
            <li>
                <a href="#">Month</a>
                <ul class="menu">
                    <li><a href="#">January</a></li>
                    <li><a href="#">February</a></li>
                    <li><a href="#">March</a></li>
                    <li><a href="#">April</a></li>
                    <li><a href="#">May</a></li>
                    <li><a href="#">June</a></li>
                    <li><a href="#">July</a></li>
                    <li><a href="#">August</a></li>
                    <li><a href="#">September</a></li>
                    <li><a href="#">October</a></li>
                    <li><a href="#">November</a></li>
                    <li><a href="#">December</a></li>
                </ul>
            </li>
            <li>
                <a href="#">Day</a>
            </li>
            <li><a href="#">Item 3</a></li>
            <li><a href="#">Item 4</a></li>
        </ul>
    );
}

export default Dropdown;