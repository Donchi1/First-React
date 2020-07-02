import React from 'react'
import Nav from  "../STARTAPP/Nav"
import Todo from "./Todo"
import TodoTwo from './TodoTwo'
import "./todo.css"

function StartApp() {
    return (
        <div>
           <Nav /> 
           <Todo />

           <div className="Todo">
               <TodoTwo />
           </div>
        </div>
    )
}

export default StartApp
