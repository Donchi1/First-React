/* Note that states are the opposite of props. it can maintain it's value and chang 
it if there is need for that. while props are read only; they are like objects constructed 
which can have any value like (function, variebles and other values)*/

import React, {Component} from "react"

class Books extends Component{
    constructor(){
        super();
        this.state = {
            result: "i am going",
            name: "luke",
            age: 43,
            login : true
        };
    }
    isLoggedIn(){
        let wordDisplay;
        if(this.state.login){
            wordDisplay = "Out"
        }else{
           wordDisplay = "In"
        }
        return(
            wordDisplay
        )
    }
     render(){
            return (
        <div>
            <h3>look {this.state.result},my name is {this.state.name} am {this.state.age} years old</h3>
            <h3>the user is logged {this.isLoggedIn()}</h3>
            <img onMouseOut={() => alert("am coming")} src="./public/logo512.png" />
         </div>  
            )
         }
   
}
export default Books

 