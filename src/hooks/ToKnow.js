

import React, {useState, useEffect} from 'react'

function ToKnow() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => { 
        console.log("you are getting the file") /* you can make the useEffect to run once like componentDidMount by making an empty array it's second arguement*/
        document.title = `you clicked ${count}`
    },[name])

 
    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)}/>
           <button onClick={() => setCount(prevCount => prevCount + 1)}>click {count} times</button> 
        </div>
    )
}

export default ToKnow
