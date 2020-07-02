import React, {Component} from "react"

class Conditional extends Component{
    constructor(){
        super()
        this.state = {
            isLoggedIn: false
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
      
            this.setState(prevState => {
                return {isLoggedIn: !prevState.isLoggedIn}

            
        })
       
    }
    render(){
        let buttonText = this.state.isLoggedIn? "logOut": "logIn"
        let txt = this.state.isLoggedIn? "logged In" : "logged Out"
        return(
            <div>
        <h1>{txt}</h1>
        <button onClick = {this.handleClick}>{buttonText}</button>
        </div>
        )
    }
}

export default Conditional