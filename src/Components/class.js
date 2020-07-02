import React from "react"
import {Component} from "react"

class Greeting extends Component{
    render(){
        return (
            <header>
                <p>Welcome {this.props.userName}</p>
            </header>
        )
    }
}
class SayHello extends Component{
    
    render(){
        const data = new Date()
        const hour = data.getHours()
        let hello;
        switch(hour){
            case 0:
            hello = "goodmorning";
            break;
            case 1:
            hello = "goodAfternoon";
            break;
            default:
            hello = "goodnight";
        
        }
        return(
    
        <h2>rejoice it is {hello}!</h2>
        
        )
    }
}
export {SayHello, Greeting}

