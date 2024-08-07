import React,{Component} from "react";
import {Greet, Greet1} from './Greet';

class Myclass extends Component {
    render() {
        return (
            <div>
                <h3>Hello, I am From Class Component</h3>
                {/* Class Using Function Component  */}
                <Greet1 name="Anjna"/>
                <Greet1 name="Disha"/>
                <Greet1 name="Divyesh"/>
            </div>
        );
    }
}

class Myclass1 extends Component {
    render() {
        return(
            <div>
                <h3>Hello, I am From Class Component: Myclass1</h3>
                <h2>Hello {this.props.name}</h2>
            </div>
        )
    }
}

export {
    Myclass,
    Myclass1,
};