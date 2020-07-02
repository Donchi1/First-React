import React, { Component } from 'react'

export default class Nav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            input : "",
            info : "",
            display: false
        }
    }
     handleChange = (event) => {
         //const {name, value} = event.target;
       this.setState({input : event.target.value})

    }
    search = () => {
        this.setState({info : this.state.input})
    }
    toggle = () => {
     this.setState(prevState => {return {display : !prevState.display }})
    }
    render() {
        return (
            <div>
                <nav>
                    <div>
                        <h1>FirstReact</h1>
                    </div>
                 {this.state.display && 
                    <ul>
                        
                        <li className="navLink"><a href="#">Home</a></li>
                        <li className="navLink"><a href="#">About</a></li>
                        <li className="navLink"><a href="#">Blogs</a></li>
                        <li className="navLink"><a href="#">contacts</a></li>
                        <li className="navLink search">
                            <input type="search" name="search" value={this.state.input} 
                            onChange={this.handleChange}/>
                            <button onClick={this.search}>search</button>
                            </li>
                    </ul>
              }
                    <div onClick={this.toggle}>toggle</div>
                    <div onClick={this.toggle}>toggle</div>
                    <div onClick={this.toggle}>toggle</div>
                </nav>
            </div>
        )
    }
}
