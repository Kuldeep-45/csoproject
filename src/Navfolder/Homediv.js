import React, { Component } from 'react'
import "../CSS/home1.css"
export default class Homediv extends Component {
    render() {
        return (
            <section id="home1">
                <h1 className="h text-center w3-animate-left">WELCOME TO CAREER-GUIDANCE</h1>
                <p className="para text-center">
                Career guidance help students understand their strengths and weaknesses and then match 
                them with theirskills and interest so that they get the best suitable career choice.</p>
                <h1 className="h text-center w3-animate-left">Let's Start</h1>
               <ul className="btnh">
                <li className="btnh"><a  className="btn-lg btn1 " href="/guardian">Guardians</a></li>
               <li className="btnh"><a  className="btn-lg btn1" href="/students">Students</a></li>
               </ul>  
            </section>
        )
    }
}
