import React from "react"
import {BUYCAKE} from "./actionTypes"

const InitialState  = {
    numOfCakes: 10
}
const cakeReducer = (state = InitialState, action) => {
   switch(action.type){
       case BUYCAKE:
        return {
            ...state,
           numOfCakes: state.numOfCakes - 1
        }
        default: 
        return state
   }
}

export default cakeReducer