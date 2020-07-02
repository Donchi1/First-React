import React, { Component } from 'react'
import {MdDelete} from "react-icons/md"
import FlipMove from "react-flip-move"

export class Todo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             input: "",
             message: [],
            
            }
        }
        
        handleChange = (e) => {
            this.setState({input: e.target.value}  )
        }
        addTodo = () => {
            this.setState({message: [...this.state.message, this.state.input]}
            )
        }

        removeTodo = (props) => {
            const filteredList = ( [...this.state.message ])
            filteredList.splice(props, 1) 
            this.setState({message : filteredList})
                
        }
        render() {
            const {input, message} = this.state
        return (
            <div>
                
                {message}
               <input type="text" value={input}
               onChange={this.handleChange} />
               <button onClick={this.addTodo}>Add todo</button>

               <div className="todoItems">
                   <FlipMove>

                {
                    message.map((msg, indx) => {
                    return <p key={indx}>{msg} <button onClick={() => this.removeTodo(indx)}><MdDelete /></button></p>
                    } )
                }

                   </FlipMove>
            </div>
            </div>
        )
    }
}

export default Todo
