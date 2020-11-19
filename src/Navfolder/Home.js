import React, { Component } from 'react' 
import Homediv from "./Homediv.js"
import Carousel from '../Carousel'
import ParticlesBg  from   "particles-bg";
import './file.css'
import JsonData from './data.json';
import Career from "./CareerGui"
import Homeele from "./Homeelement"
import WHY from "./WHYus"
import Goal from "./Goals"
export default class Home extends Component {
    render() {
        return (
            <>
            <header id="home1">
            <ParticlesBg type="circle" bg={true} />
            <section id="home1">
            <h1 className="responsive-headline h text-center w3-animate-left">WELCOME TO CAREER-GUIDANCE</h1>
            <p className="para text-center">
                Career guidance help students understand their strengths and weaknesses and then match 
                them with theirskills and interest so that they get the best suitable career choice.</p>
                <h1 className="h text-center w3-animate-left">Let's Start</h1>
            <a href="/students" className="button btn project-btn">CLICK HERE</a>
            </section>
            </header>
            <Goal/>
            <WHY/>
            </>
        )
    }
}
