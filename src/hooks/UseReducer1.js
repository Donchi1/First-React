import React, {useReducer} from 'react'

const initialState = {
    firstCount : 0,
    secondCount : 10
}

function UseReducer1() {
    const reducer = (state, action) => {
          switch(action.type){
        case "increment":
            return {...state,firstCount: state.firstCount + action.value};
            
        case "decrement":
            return {...state,firstCount: state.firstCount - action.value};
        case "increment2":
            return {...state,secondCount: state.secondCount + action.value};
            
        case "decrement2":
            return {...state,secondCount: state.secondCount - action.value};
        case "reset":
            return initialState;
        default: 
        return state

          }
    }
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
           <h2>count - {count.firstCount}</h2>
           <h2>secondCount - {count.secondCount}</h2>
    <h1>{JSON.stringify(count)}</h1>
           <button onClick={() => dispatch({type:"increment", value: 1})}>increment</button>
           <button onClick={() => dispatch({type:"decrement", value: 1})}>decrement</button>
           
           <button onClick={() => dispatch({type:"increment2", value: 1})}>secondincrement</button>
           <button onClick={() => dispatch({type:"decrement2", value: 1})}>seconddecrement</button>
           <button onClick={() => dispatch({type:"increment", value: 5})}>increment5</button>
           <button onClick={() => dispatch({type:"decrement", value: 5})}>decrement5</button>
           <button onClick={() => dispatch({type:"reset"})}>reset</button>
        </div>
    )
}
export default UseReducer1