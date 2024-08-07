import React, {Component} from "react";

class Message extends Component {
    
    constructor(p){
        super(p)
        
        this.state = {
            Message: 'Welcome Visitor'
        }
    }

    changeMessage() {
        // this.setState({
        //     Message: 'Thank You For Subscribing'
        // })
        console.log(this)
    }    

    render (){
        return(
            <div>
                <h1>{this.state.Message}</h1>
                <button onClick={this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default Message