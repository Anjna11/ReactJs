import React,{Component} from "react";

class ClassClick extends Component {
    
    Demo() {
        console.log('hello')
    }
    render(){
        return(
            <div>
                <button onClick={this.Demo}>Click</button>
            </div>
        )
    }
}

export default ClassClick