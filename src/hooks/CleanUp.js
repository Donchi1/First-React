import React, {useState} from "react"



function CleanUp() {
    const[display, setDisplay] = useState(true)

    return (
        <div>
            <button onClick={() => setDisplay( !display )}>toggle</button>
            { display && <h2>toggled me</h2>}
        </div>
    )
}

export default CleanUp
