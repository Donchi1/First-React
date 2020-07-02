import React, {useContext} from 'react'
import {countContext} from "./HookApp"

{/*combining useRaducer with useContext for global state managements */}





function Reducerwithcontext() {
    const userinfo = useContext(countContext)

    return (
        <div>
            <h2>context first - {userinfo.countValue}</h2>
           <button onClick={() => userinfo.countDispatch("increment")}>increment</button>
           <button onClick={() => userinfo.countDispatch("decrement")}>decrement</button>
           <button onClick={() => userinfo.countDispatch("reset")}>reset</button>
        </div>
     
    )
}

export default Reducerwithcontext
