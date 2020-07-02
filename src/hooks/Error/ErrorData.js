import React from 'react'

function ErrorData({userName}) {

        if(userName === "jude"){
            throw new Error("not a Hero")
        }

        return(
          
          <div>
           <h2>{userName}</h2>
          </div>
        )
       
    
}

export default ErrorData
