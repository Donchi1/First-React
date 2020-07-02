import React, {Component} from "react"
import GoodsArray from "./goods"

 function Todo(props) {
    
 return (
     <div className="todo-items">
     <input type="checkbox" checked={props.items}
     onChange={() => props.handleClick(props.item.id)}/>
     <p>{props.txt}</p>
      
     </div>
 )
}

//todo phase2

class Todo1 extends Component{
    constructor(){
        super()
        this.state = {
         counter : 0,
         todos : GoodsArray
         
        }
        this.changeCount = this.changeCount.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(id){
        console.log("change", id)
    }
    changeCount(){
       //this.setState({counter : this.state.counter + 1})  //modifying previous state by adding 1 to it
       
      this.setState(prevState => {
         // console.log(prevState)
          let i = 0
              if(prevState.counter === 10){
                return {counter: prevState.counter = 0}
                  
                }else{
                 return {counter: prevState.counter + 1}
                  
              
      }
      })

    }
    render(){
    return( 
        <div>
    <h1 style= {{color: this.state}}>{this.state.counter}</h1>
    <button onClick={this.changeCount}>click me</button>
    
      </div>

     )
     }
} 

export {Todo1, Todo}

 