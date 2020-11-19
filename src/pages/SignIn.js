import React, { Component } from 'react'
import "./signin.css"
export default class SignIn extends Component { 
    state = {
        email: '',
        password: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault(); console.log(this.state);
    }
     render() {
        return (
            <div className="form1 white">
            <form class="authentication-form" onSubmit={this.handleSubmit}>
            <div class="container form-group form-area my-auto mx-auto">
            <div class="form-heading text-center">
            <h3 class="text-info text-uppercase ">SIGNIN </h3>
            </div>
            <div className="form-group">
            <label for="email" class="font-weight-bold text-size pt-3">Email</label>
            <input onChange={this.handleChange} type="email" class="form-control" name="email" placeholder="Email" />
            </div><div className="form-group">
            <label for="password" class="font-weight-bold text-size pt-3">Password</label>
            <input onChange={this.handleChange} type="password" class="form-control" placeholder="Password" name="password" />
            </div>
            <div className="input-field">
                 <button className="btn pink lighten-1 z-depth-0">Login</button>
             </div>
            </div> 
            </form>
            </div>
        )
    }
}
