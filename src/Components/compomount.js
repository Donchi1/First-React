import React, {Component} from "react"


class Compomount extends Component{
    constructor() {
        super()
        this.state= {
            info: {},
            loading: false
        }
    }
  componentDidMount() {     // runs or mounts a fill imidiatelly after the page is rendered like asyn function
    this.setState({loading: true})
    fetch("https://api-football-v1.p.rapidapi.com/v2/predictions/157462", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
            "x-rapidapi-key": "f009f7b2d8msh33a514b1ced86a1p14b00fjsn7e1c646cf2e6"
        }
    })
    .then(response => response.json())
    .then(data => 
       this.setState({
        loading: false,
        info: data
    }))
    .catch(err => {
        console.log(err);
    });
    
  } 
  
  render(){
      let loaded = this.state.loading? "Loading..." : this.state.info.name
      return(
          <div>
            <h1>{loaded}</h1>
            
          </div>
      )
  }
}

export default Compomount