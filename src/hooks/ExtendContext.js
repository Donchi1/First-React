
import React from 'react'
import {userContext, data} from "./HookApp"

function ExtendContext() {
    return (
        <div>
            <userContext.Consumer>
               {
                user => {
                  return (
                   <data.Consumer>
                      {
                       info => {
                         return <div>user context value is {user}, data value {info}</div>
                        }  
                       }
                      </data.Consumer>
                     )
                    }
                  }
               </userContext.Consumer>
                
        </div>
    )
}

export default ExtendContext
