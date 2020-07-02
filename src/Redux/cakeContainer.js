import React from "react"

import { connect } from "react-redux"
//import {mapStateToProps, mapDispatchToProps} from "./selectors"
import cakeAction from "./action"


function Container(props){
    return(
        
        <div>
    <h1>Buy your cake here- {props.numOfCake}</h1>
            <button onClick= {props.cakeAction}>Buy Cake</button>
        </div>
        
    )
}

 const mapStateToProps = (state) => {
    return {
        numOfCakes: state.numOfCakes
    }
}

 const mapDispatchToProps = (dispatch) => {
return {
    cakeAction: () => {
        dispatch(cakeAction())
    }
}
}

export default connect(mapStateToProps,mapDispatchToProps)(Container)

