import React, {useState, useEffect} from 'react'
import Axios from 'axios'



function DataFetchingTwo() {

    const [post, setPost] = useState({})
    const [id, setId] = useState(1)

    useEffect(() => {
        Axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => {
            setPost(res.data)

        })
        .catch(err => console.log(err))

    }, [id])

    return (
        <div>
          <input type="text" placeholder="input post id" value={id}
          onChange={e => setId(e.target.value)} />
          <ul>
              <li>{post.title}</li>
          </ul>
         
        </div>
    )
}

export default DataFetchingTwo
