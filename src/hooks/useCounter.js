import {useEffect} from 'react'

function useCounter(count) {

useEffect(() => {
    document.title = `your counter is ${count}`
}, [count])
   
}

export default useCounter
