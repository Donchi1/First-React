import React, {useContext} from 'react'
import {countContext} from "./HookApp"
{/*combining useRaducer with useContext for global state managements */}

function Reducerwithcont2() {
    const info2 = useContext(countContext)

    return (
        <div>
            <h2>context third - {info2.countValue}</h2>
           <button onClick={() => info2.countDispatch("increment")}>increment</button>
           <button onClick={() => info2.countDispatch("decrement")}>decrement</button>
           <button onClick={() => info2.countDispatch("reset")}>reset</button>
        </div>
     
    )
}

export default Reducerwithcont2
