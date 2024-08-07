import React from "react";

const Hello = () => {
    // return (
    //     <div>
    //         <h3>Hello, i'm Anjna</h>
    //     </div>
    // )

    return React.createElement(
        'div',
        null, 
        React.createElement(
            'h3', 
            null, 
            'Hello, Im Anjna'
        )
    )
}

export default Hello