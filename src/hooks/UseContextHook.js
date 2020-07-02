import React, {useContext} from 'react'
import {userContext,data} from "./HookApp"

{/*useContext() Hook made it very easy to handle 
sharaeble datas onlike the code in ExtendContext.
 with this you can easily handle your data Globally with your child components*/}
 
 function UseContextHook() {
    const user = useContext(userContext)
    const info = useContext(data)
    return (
        <div>
           <div>
               {user} - {info}

               </div>
        </div>
    )
}

export default UseContextHook
