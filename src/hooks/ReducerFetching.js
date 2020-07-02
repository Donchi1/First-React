

import React, { useReducer, useEffect} from 'react'
import Axios from 'axios'
import {MdError} from "react-icons/md"
import {FaSpinner} from "react-icons/fa"

const initialState = {
    loading : true,
    error : "",
    post : {},
    input : 1,
    buttonInfo: 1
}


const reducer = (state, action) => {
  switch(action.type){
      case "BUTTON_FETCH":
          return {
              buttonInfo: state.input,
              input : state.input,
              loading : false,
              error : "",
              post : {}
          }
          case "SET_ID":
          return {
          input :  action.inputValue,
          loading : false,
          error : "",
          post : {}
          }
    case "FETCH_SUCCESS":
        return  {
            input : state.input,
            loading : false,
            error : "",
            post : action.payload

        };
        case "FETCH_ERROR":
            return {
            input : state.input,
           loading: false,
           error : "something went wrong!",
           post: {}
           
            }
  }
}

function ReducerFetching() {
const [state, dispatch] = useReducer(reducer, initialState)
   
     const handleFetch = () => {
         dispatch({type : "BUTTON_FETCH"})
     }

    useEffect( () => {
        Axios.get(`https://jsonplaceholder.typicode.com/posts/${state.input}`)
        .then(res => {
            dispatch({type: "FETCH_SUCCESS", payload: res.data})
        })
        .catch(error => {
            dispatch({type: "FETCH_ERROR"})
        })
    }, [state.buttonInfo] )
   
    return (
        <div>
          {state.loading? <h2>< FaSpinner /> loading...</h2> : state.post.title}  
    {state.error? <h2 style={{color: "red"}}><MdError/> {state.error}</h2> : null}
    <input type="number" value={state.input} min="1"
    onChange={(e) => dispatch({type: "SET_ID", inputValue : e.target.value})}/>
    <button onClick={handleFetch}>fetch-data</button>
        </div>
    )
}

export default ReducerFetching
