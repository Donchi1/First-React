
import React, { useReducer } from 'react'
import Counter from "./counter"
import CounterTwo from "./CounterTwo"
import Input from "./input"
import CountLife from "./countLife"
import ToKnow from "./ToKnow"
import CleanUp from "./CleanUp"
import IntervalHooks from "./IntervalHooks"
import DataFetching from "./DataFetching"
import DataFetchingTwo from "./DataFetchingTwo"
import DataFetchingIII from "./DataFetchingIII"
import UseContext from "./UseContext" 
import UseReducer from "./UseReducer" 
import UseReducer1 from "./UseReducer1" 
import Reducerwithcontext from './reducerwithcontext'
import Reducerwithcont1 from './reducerwithcont1'
import Reducerwithcont2 from './reducerwithcont2'
import ReducerFetching from "./ReducerFetching"
import UseCostom from "./UseCostom"
import ErrorFile from "./Error/ErrorFile"
import UseRef from "./UseRef/UseRef"



export const userContext = React.createContext()
export const data = React.createContext()
export const countContext = React.createContext()


  const initialState = 0
  const reducer = (state, action) => {
        switch(action){
      case "increment":
          return state + 1;
          
      case "decrement":
          return state - 1;
      case "reset":
          return initialState;
      default: 
      return state

        }
      }

function HookApp() {
   const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
          <UseRef />
         <ErrorFile />
          <UseCostom />
          <ReducerFetching />
        <countContext.Provider value={{countValue : count, countDispatch: dispatch}}>
          <div>
          count - {count}
         < Reducerwithcontext />
          <Reducerwithcont1 />
          <Reducerwithcont2 />
          </div>
        </countContext.Provider>

          <UseReducer />
          <UseReducer1 />
          <userContext.Provider value={"Donchi"}>
            <data.Provider value={"the legend"}>

             <UseContext />

            </data.Provider>
          </userContext.Provider>

          <DataFetchingIII />
          <DataFetchingTwo />
          <DataFetching />
          <IntervalHooks />
          <Counter />
          <CounterTwo /> 
          <Input />
          <ToKnow />
          {/*<CountLife />*/}
          <CleanUp />
        </div>
    )
}
 
export default HookApp
