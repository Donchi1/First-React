//import React from "react"
import {createStore, applyMiddleware} from "redux"
import cakeReducer from "./reducer"
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from "redux-logger"


const store = createStore(cakeReducer,composeWithDevTools(applyMiddleware(logger)))
export default store
