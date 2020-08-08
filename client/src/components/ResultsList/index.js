import React from "react";

function ResultsList(props) {
    return (
        <ul className="list-group">
            {props.results.map(result => (
                <li className="list-group-item" key={result.id}>
                    // ?????
                </li>
            ))}
        </ul>
    )
}

export default ResultsList;