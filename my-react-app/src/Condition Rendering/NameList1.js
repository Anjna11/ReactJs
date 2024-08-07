import React from "react";
import Person from "./Person";

function NameList1(){
    const persons = [

        {
            id: 1,
            name: 'Anjna',
            age: 19
        },

        {
            id: 2,
            name: 'Disha',
            age: 24
        },

        {
            id: 3,
            name: 'Divyesh',
            age: 29
        }
    ]
    // JavaScript objects are written with curly braces {}. map() tackes function as arguments.

    const personlist = persons.map(person => <Person person={person}/>)
    return <div>{personlist}</div>
}

export default NameList1 