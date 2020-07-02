
class Name{
    constructor(name){
        const each = document.createElement("li")
        each.textContent = name;
       const one = document.querySelector(".just")
       one.appendChild(each)
       console.log(one)
    }
}

class Each{
    constructor(){
        this.names= ["john","chidi","mike"]
      this.counter = 0;
      const button = document.querySelector(".btn")
      button.addEventListener("click", () => {
          this.getName()
        })
    }
    getName(){
    const oneName = new Name(this.names[this.counter])
    this.counter ++
    if(this.counter >= this.names.length){
        this.counter = 0
    }
}
}
const full = new Each()

import React from "react"


 export default function don(){
     return(
         <>
         <li>my life is great</li>
         <button>click Here</button>
         </>
     )
 }