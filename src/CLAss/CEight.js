import React, { Component } from 'react'
import "../CSS/Home.css"
import "./sidebar.css"
import Photo from "./Photo.js"
export default class CEight extends Component {
    render() {
        return ( 
        <div className="white">
          <Photo />
          <div id="seconddiv">
          <section id="home1ceight">
          <h1 id="hceight1"> 5 Benefits of Early Career Planning</h1>
          <p className="pceight1">1. Students get a fair amount of time for in-depth research and planning.</p>
          <p className="pceight1">2. It gives students a fair bit of time for trial-and-error and exploration, especially those who change their minds frequently.</p>
          <p className="pceight1">3. It can help build focus and ambition by setting clear goals to aspire towards.</p>
          <p className="pceight1">4. It minimizes distractions since a focused child knows what is expected of her and works towards it.</p>
          <p className="pceight1">5. In case there are additional skills to be acquired, or preparation to be done for a particular career(e.g., cracking an entrance exam).</p>
          </section>
          <div id="sectiondiv"><h1 id="watchvideo">Watch Video</h1>
          <iframe width="280" height="230" src="https://www.youtube.com/embed/yIW6eTU2oXY" frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen> 
          </iframe></div>
          </div>
         </div>
        )
    }
}
