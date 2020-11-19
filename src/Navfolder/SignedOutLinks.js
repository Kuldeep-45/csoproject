import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
export default class SignedOutLinks extends Component {
    render() {
        return (
            <>
            <ul className="right">
                <li><NavLink activeClassName='menu_active' to="/signup">SignUp</NavLink></li>
                <li><NavLink activeClassName='menu_active' to="/signin">LogIn</NavLink></li>
            </ul>
            </>
        )
    }
}
