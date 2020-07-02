import React, {useState} from 'react'
import useCounter from './useCounter'

function UseCostom() {
    const [count, setcount] = useState(0)
    useCounter(count)
     
    return (
        <div>
           <h2>Your coun value is - {count}</h2>
           <button onClick={() => setcount(count + 1)}>counter</button> 
        </div>
    )
}

export default UseCostom
