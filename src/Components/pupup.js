import React, {Component} from "react"


class PUPUP extends Component{
    constructor(props){
        super(props);
        this.state = {
            pup: 0
        }
    }
    show = () =>{
        this.setState(prevState => {
            return {pup: (prevState.pup + 2020) - prompt("what is the year of your birth")} 
        })
    }

    render(){
      return(
          <div>
              {this.state.pup && <h1>you are: {this.state.pup} years old</h1>}
              <button onClick={this.show}>click me</button>
          </div>
      )
    }
}


export default PUPUP