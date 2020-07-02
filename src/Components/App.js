import React, {Component} from "react"
import Nav from "./navBar"

import Jokes from "./jokes"
import GoodsArray from "./goods"
import Products from "./products"
import {Greeting, SayHello} from "./class"
import Books from "./states"
import {Todo1, Todo} from "./todo"
import Conditional from "./conditionals"
import Compomount from "./compomount"
//import FormVal from "./forms"
import Myform from "./formEXECISE"
import PUPUP from "./pupup"
//import Container from "../Redux/cakeContainer"
//import { Provider } from "react-redux"
//import store from "../Redux/cakeContainer"


export default class App extends Component{
    
    
    render(){
        const goods = GoodsArray.map(item => <Products key = {item.id} product = {item} handleClick />)
    return (
        <main>
        
     <div>
     
         <PUPUP />
         <Myform />
         <Compomount />
         <Conditional />
         <Todo1 />

         <Books />
         <Greeting userName = "Donald"/>
         <SayHello />
         {goods}
         
        <Nav />
        <Todo txt="placeholder doller"/>
        <Todo txt="chidi is a great man"/>
        <Todo txt="i love tonya"/>
        <Todo txt="don is a donchi"/>

        <div>
         <Jokes
          Answer="the color of our flag is Green White Green"
          />
         <Jokes 
         Question="How old are you"
         Answer="you should be 24 years old now"
         />
         <Jokes 
         Question="what is your favourite color"
         Answer="my favourite color is red"
         />
         
        </div>
     </div>
     </main>
    )
    }
}

