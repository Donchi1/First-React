  
import React from 'react'
import { useState } from "react"

function Input() {

   const initialState = {
        firstName : "",
        lastName : ""
       
    }
    const [name, setName] = useState(initialState)
    const [message, setMessage] = useState([]) 
 
 
   // const handle = () =>{
   //   setMessage(() => [...message, name.firstName])
   // }
    return (
        <div>
            <form>
           <input type="text" value={name.firstName} 
           onChange= {(e) =>  setName( {...name, firstName: e.target.value} )} /> 
           <input type="text" value={name.lastName} 
           onChange= {(e) =>  setName( {...name, lastName: e.target.value} )} />
          
      
    <h2> Your firstName is: {name.firstName}</h2> 
    <button onClick={() => setMessage(name.firstName)}>click me</button>
    <h2> Your lastName is: {name.lastName}</h2>
    <h2> Your message is: {message}</h2>
    <ul>

    <li>{message}</li>
    </ul>

   
    
     
        </form>

        </div>
    )
}

export default Input
