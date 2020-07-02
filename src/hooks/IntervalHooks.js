import React, {useState, useEffect} from 'react'

function IntervalHooks() {
const [count, setCount] = useState(0)

const counting = () => {
    setCount(prevCount => prevCount + 1)
}

useEffect(() => {
   const interval = setInterval(counting, 1000)
    return () => {
        clearInterval(interval)
    }
}, []) /* if am using normal count not
      tinking about the previous state then i will use count 
      as a dependency in the array [count] */

    return (
        <div>
           <h1>{count}</h1> 
        </div>
    )
}

export default IntervalHooks
