import React, { useState } from 'react'
import {MdDelete} from "react-icons/md"
import "./todo.css"
import FlipMove from "react-flip-move"

function TodoTwo() {
    const [input, setinput] = useState("")
    const [message, setmessage] = useState([])
    //const [key, setkey] = useState(Date.now())
    
      const addTodo = (e) => {
         e.preventDefault()
         if(input !== ""){
             setmessage([...message, input])
             setinput("")
         }
         }
         
      
      const removeTodo = (id) => {
         const filteredTodo = ([...message])
         filteredTodo.splice(id, 1)
          setmessage(filteredTodo);
      }

    return (
        <form onSubmit={addTodo}>
            <div style={{textAlign: "center"}}>
            <input className="Todo-input" type="text" value={input}
            placeholder="input text"
            onChange={(e) => {
              setinput(e.target.value) 
              
            }}/>
            <button type="submit" className="Add-btn">AddToDo</button>
        </div>
        <div className= "Todo-cont">
                    
            <FlipMove duration = {500} easing="ease-in-out">
                {message.map((msg, indx) => {
                    return( 
                 <p className="Todoitems" key={indx}> {msg} 
                     <button
                          onClick={() => removeTodo(indx)} className="Remove-todo-btn">
                          <MdDelete/> 
                     </button>
                </p>)
                })}
            </FlipMove>
      </div>
        </form>
    )
}

export default TodoTwo
