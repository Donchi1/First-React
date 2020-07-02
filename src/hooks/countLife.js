import React, {useState, useEffect} from "react"

//{/*using the use effect to perform side effects to your page like Async.
     //useEffect replaces three life circle methods in class component(componentDidMount, 
    // componentDidUpdate, componentwillUnmount) */}

function CountLife() {
    const [count, setcount] = useState(0)

    useEffect(() => {document.title = `you clicked ${count} times `})
    return (
        <div>
          <h2>your count is: {count}</h2>
          <button onClick={() => setcount(prevCount => prevCount + 1)}>counter</button>  
        </div>
    )
}

export default CountLife
