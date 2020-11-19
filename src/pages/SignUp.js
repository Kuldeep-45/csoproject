import React, { Component } from 'react'
import "./signin.css"
import axios from 'axios'
export default class SignUp extends Component { 
    state = {
        todo_firstname: '',
        todo_lastname: '',
        todo_email: '',
        todo_password: '',
        todo_confirmpassword:''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault(); console.log(this.state);
        const newTodo ={
            todo_firstname: this.state.todo_firstname,
            todo_lastname: this.state.todo_lastname,
            todo_email: this.state.todo_email,
            todo_password: this.state.todo_password,
            todo_confirmpassword: this.state.todo_confirmpassword
        }
       axios.post('http://localhost:4000/todos/add', newTodo)
          .then(res => console.log(res.data));
    }
     render() {
        return (
            <div class="form2 white">
            <form  onSubmit={this.handleSubmit}>
               <div class="container form-group form-area my-auto mx-auto">
               <div class="form-heading text-center">
               <h3 class="text-info text-uppercase ">Signup </h3>
               </div>
               <label for="firstName" class="font-weight-bold text-size  pt-3">First Name</label>
               <input onChange={this.handleChange} type="text" id="todo_firstname" placeholder="First Name" />
               <label for="lastName" class="font-weight-bold text-size pt-3">Last Name</label>
               <input onChange={this.handleChange} placeholder="Last Name" type="text" id="todo_lastname" />
               <label for="email" class="font-weight-bold text-size pt-3">Email</label>
               <input onChange={this.handleChange} type="email"  id="todo_email" placeholder="Email" />
               <label for="password" class="font-weight-bold text-size pt-3">Password</label>
               <input onChange={this.handleChange} type="password" placeholder="Password" id="todo_password" />
               <label for="confirmPassword" class="font-weight-bold text-size pt-3">Confirm Password</label>
               <input onChange={this.handleChange} type="password" id="todo_confirmpassword"  placeholder="Confirm Password" />
               <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0" >Submit</button>
                </div>
               </div> 
               </form>
               </div>
        )
    }
}
