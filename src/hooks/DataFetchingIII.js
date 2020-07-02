import React, {useState, useEffect} from 'react'
import Axios from 'axios'

function DataFetchingIII() {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [fetchPost, setFetchPost] = useState(1)

    const handleFetch = () => {
        setFetchPost(id)
    }

    useEffect(() => {
        Axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => {
            setPost(res.data)
        })
        .catch(err => console.log(err))

    }, [fetchPost])
    return (
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)} />
            <button onClick={handleFetch}>fetch Post</button>
            <ul>
             <li>{post.title}</li>
            </ul>
            
        </div>
    )
}

export default DataFetchingIII
