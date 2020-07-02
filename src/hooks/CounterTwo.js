
import React from 'react'
import {useState} from "react"


function CounterTwo() {
    const initialState = 0
    const [count, setCount] = useState(initialState)

    const countFive = () => {
        for(let i = 0; i < 5; i++){
            setCount(prevCount => prevCount + 1)
        }
    }
    return (
        <div>
           <h1>counter:{count}</h1> 
           <button onClick= {() => setCount(prevCount => prevCount + 1)}>increase</button>
           <button onClick= {() => setCount(prevCount => prevCount - 1)}>decrease</button>
           <button onClick= {() => setCount(initialState)}>reset</button>
           <button onClick= {countFive}>count5</button>
        </div>
    )
}

export default CounterTwo
