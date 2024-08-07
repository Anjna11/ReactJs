import React from "react";

function Greet (props) {
    return (
        <div>
            <h3>Hello i am {props.name} from Greet</h3>
            {props.children}
        </div>
    )
}

function Greet1 (n) {
    return (
        <h2>Hello {n.name}</h2>
    )
}

export { 
    Greet, 
    Greet1,
};