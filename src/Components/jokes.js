import React , {Component} from "react"



function Jokes(props){
return (
  <div>
    <h3 style={{display: !props.Question && "none"}}>Question:{props.Question}</h3>
<h3 style={{color: !props.Question && "red"}}>Answer:{props.Answer}</h3>
<hr />
  </div>
)
}



export default Jokes