import React, {Component} from "react"


class FormVal extends Component{
    constructor(){
        super()
        this.state= {
          firstName : "",
          lastName: "",
          isFriendly: false,
          gender : "",
          favouriteColor: ""
        }
        this.formControl = this.formControl.bind(this)
    }

    formControl(event) {
      const {name, value, checked, type} = event.target;
      type === "checkbox"? this.setState({[name]: checked}) : this.setState( {[name] : value})
          //{[event.target.name]: event.target.value} //this will still work perfectly but can result to bugs
           
    }

    render(){
        return (
     <form  method="post">
         <input type="text" 
          value={this.state.firstName}
          placeholder="firstName" name="firstName" 
          onChange={this.formControl}
          />

          <br />
          <hr/>

         <input type="text" 
          value= {this.state.lastName}
          placeholder="lastName"
           name="lastName" 
           onChange={this.formControl}
           />

        <h1>{this.state.firstName} {this.state.lastName}</h1>

        <textarea placeholder="message"  
            onChange={this.formControl}
             minLength="5" maxLength="2000"
        />

        <br />
        <label>
             <input type="checkbox"
                 name="isFriendly" 
                 checked={this.state.isFriendly}
                  onChange={this.formControl}
               />
             is friendly
          </label>

          <br /> 

        <label>
             <input type="radio" 
              name="gender" 
              value="male"
              checked={this.state.gender === "male"} 
              onChange={this.formControl}/>
          male
          </label> 
        <label>
         <br />
        <input type="radio" name="gender" value="female"
         checked={this.state.gender === "female"} 
         onChange={this.formControl}
         />
          female
          </label>
          <br />
          <label for="favColor">choose your Favourite color:</label><br />
          <select value={this.state.favouriteColor} id="favColor" 
          onChange={this.formControl}
          name="favouriteColor"
          >
            <option value="green">green</option>
            <option value="yellow">yellow</option>
            <option value="red">red</option>
            <option value="violent">violent</option>
           
            </select>
        <h1>color{this.state.favouriteColor}</h1> 
        <button type="submit">submit</button>
     </form>

        )
    }
}
export default FormVal