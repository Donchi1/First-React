import React, {useContext} from 'react'
import {countContext} from "./HookApp"
{/*combining useRaducer with useContext for global state managements */}

function Reducerwithcont1() {
    const info1 = useContext(countContext)

    return (
        <div>
            <h2>context second - {info1.countValue}</h2>
           <button onClick={() => info1.countDispatch("increment")}>increment</button>
           <button onClick={() => info1.countDispatch("decrement")}>decrement</button>
           <button onClick={() => info1.countDispatch("reset")}>reset</button>
        </div>
     
    )
}

export default Reducerwithcont1
