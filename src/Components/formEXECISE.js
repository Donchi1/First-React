import React, {Component} from "react"

class Myform extends Component{
    constructor(){
        super()
        this.state = {
            firstName : "",
            lastName : "",
            age : "",
            gender: "",
            destination : "",
       
            pepper: false,
            fried : false,
            cafine : false
            

        }
        this.handleForm = this.handleForm.bind(this)
    }
  handleForm(event){
      const {name, checked, type, value} = event.target
      type === "checkbox"? this.setState({[name]: checked}) : this.setState({[name]: value})
   }

   render(){
       return(
    <section>
         <form>
             <input type="text" 
             name="firstName" 
             placeholder="firstName" 
             value={this.state.firstName}
             onChange={this.handleForm}
             />
             <br />

             <input type="text"
              name="lastName" 
              placeholder="lastName" 
              value={this.state.lastName}
              onChange={this.handleForm}
              />
              <br/>
            <label for="date"> Date of birth: </label>
            <input type="date" id="date" 
            value={this.state.age} name="age"
            onChange = {this.handleForm}
            
            />
            <h1>i am {this.state.age} {this.state.firstName} - {this.state.lastName}</h1>
           
            <br />
             <label for="male">Male</label>
            <input type="radio" name="gender" value="male" id="male" 
            onChange={this.handleForm}
            checked={this.state.gender === "male"}
            />
            <br />
            <label for="female">Female</label>
            <input type="radio" name="gender" value="female" id="female"
            checked={this.state.gender === "female"}
             onChange={this.handleForm}
             />
        <br />
            
               <select name="destination" value={this.state.destination} onChange={this.handleForm}>
                  <option value="">..please choose a destination</option>
                  <option value="london">London</option>
                  <option value="Newyork">Newyork</option>
                  <option value="france">France</option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="swize">Swizerland</option>
             </select>  
               <br />
               <h2>DietryRestrictions</h2>
               
               <label>
                   <input
                     type="checkbox"
                     checked={this.state.pepper}
                     name="pepper"
                     onChange={this.handleForm}
                   />
                   Pepper
               </label>
             <br />
               <label>
                   <input
                     type="checkbox"
                     checked={this.state.fried}
                     name="fried"
                     onChange={this.handleForm}
                   />
                   Fried
               </label>
                 <br />
               <label>
                   <input
                     type="checkbox"
                     checked={this.state.cafine}
                     name="cafine"
                     onChange={this.handleForm}
                   />
                    Cafine
               </label>
               <br />

              <button type="submit">Submit</button>

         </form>

    </section>
       )
   }
}



export default Myform