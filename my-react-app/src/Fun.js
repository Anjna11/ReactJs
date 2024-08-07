import React from 'react'; 

function Demo() {
    return <h3>How Are You?</h3>
}

// const Demo = () => {
//     return (
//     <div>
//         <h1>How Are You?</h1>
//     </div>
//     )
// }

    
function Demo1() {
    const mytable = (
        <table>
            <tr>
                <th>Id</th>
                <th>Name</th>
            </tr>
            <tr>
                <td>1</td>
                <td>Roman</td>
            </tr>
    
            <tr>
                <td>2</td>
                <td>Jonn</td>
            </tr>
        </table>
    )
    return mytable
}

export { 
    Demo, 
    Demo1,
};
