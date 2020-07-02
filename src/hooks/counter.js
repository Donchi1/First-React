import {useState} from "react"
import React from "react"


function Counter() {
    const [count, setCount] = useState(0)
    return (
        <div>
          <h1>count: {count}</h1>
          <button onClick={() => setCount(count + 1)}>Click increase</button>  
        </div>
    )
}

export default Counter