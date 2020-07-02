import React,{useState, useEffect} from 'react'
import axios from "axios"

function DataFetching() {
   const [posts, setPosts] = useState([])
   const [msg, setMsg] = useState(true)
   const [errors, setError] = useState("")

   useEffect(() => {
       axios.get("https://jsonplaceholder.typicode.com/posts")
       .then(res =>{ 
        setPosts(() => res.data)
        setMsg(false)
        setError("")
       })
       .catch(error => {
           console.log(error)
        setMsg(false)
        setError("something went wrong")

        })
   }, [])
    return (
        <div>
        {msg? "loading..." : posts.map(item => <li key={item.id}>{item.title}</li>)}
        {errors? errors: null}
        </div>
    )
}

export default DataFetching
