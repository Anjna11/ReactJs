import React, {Component} from "react";

class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }

    render(){

        return this.state.isLoggedIn && <h2>Welcome Anjna</h2>

        // return this.state.isLoggedIn ? <h2>Welcome Anjna</h2> : <h2>Welcome guest</h2>

        // if(this.state.isLoggedIn){
        //     return <h2>Welcome Anjna</h2>
        // } else {
        //     return <h2>Welcome guest</h2>
        // }
    }
}

export default UserGreeting