import React, {Component} from "react";

class EventBind extends Component {
    
    constructor(props){
        super(props)

        this.state = {
            Message: 'Hello!'
        }
    }

    clickHandler (){
        this.setState({
            Message: 'Goodbye!'
        })
    }
    
    render(){
        return(
            <div>
                <h2>{this.state.Message}</h2>
                <button onClick={() => this.clickHandler()}>Click Me!</button>
            </div>
        )
    }
}

export default EventBind