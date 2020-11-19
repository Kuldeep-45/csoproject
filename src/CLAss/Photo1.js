import React, { Component } from 'react'
import img1 from "../images/exercise1.jpg"
import img2 from "../images/sport1.jpg"
import img3 from "../images/acad1.jpg"
import "./sidebar.css"
export default class Photo1 extends Component {
    render() {
        return (
            <div>
               <section class="container section" id="photos">
                   <div class="scrollspy row" id="exer1">
                       <div class="col s12 l4">
                           <img src={img1} alt="" class="responsive-img materialboxed"></img>
                       </div>
                       <div class="col s12 l6 offset-l1">
                           <h2 class="indigo-text text-darken-4 text-center">Exercise</h2>
                      <p>Physical fitness refers to the ability of your body systems to work together efficiently to allow you to be healthy and perform activities of daily living. Being efficient means doing daily activities with the least effort possible. A fit person is able to perform schoolwork, meet home responsibilities, and still have enough energy to enjoy sport and other leisure activities. Physical fitness is made up of 11 parts - 6 of them health related and 5 skill related.  The health-related parts of fitness are body composition, cardiorespiratory endurance, flexibility, muscular endurance, power, and strength. The skill related parts of fitness are speed, balance, agility, coordination and reaction time.</p>
                      <li class="center"><a href="#" class="button big special">Learn More</a></li>
                     </div>
                   </div>
                   <div class="scrollspy row" id="ment1">
                       <div class="col s12 l4 push-l7">
                           <img src={img2} alt="" class="responsive-img materialboxed "></img>
                       </div>
                       <div class="col s12 l6 pull-l6 ">
                           <h2 class="indigo-text text-darken-4 text-center">Mental Ability</h2>
                           <p class=" paraclass">Healthy brain food for studying includes: Protein — meat, fish, eggs, poultry, legumes, nuts and seeds, dried beans and lentils, dairy products and soy products. Protein helps your brain send messages to the rest of your body, and helps create brain chemicals that improve your mood.Food and school are two interconnected topics. Children spend a large part of their day in school, so the food that is served in and around school greatly influences eating habits. Fast food in particular has proven to affect school children's health.</p> 
                           <li class="center"><a href="#" class="button big special">Learn More</a></li>
                       </div>
                   </div>
                   <div class="scrollspy row" id="pare1">
                       <div class="col s12 l4">
                           <img src={img3} alt="" class="responsive-img materialboxed"></img>
                       </div>
                       <div class="col s12 l6 offset-l1">
                           <h2 class="indigo-text text-darken-4 text-center">Parents</h2>
                           <p class="text-center paraclass">Healthy brain food for studying includes: Protein — meat, fish, eggs, poultry, legumes, nuts and seeds, dried beans and lentils, dairy products and soy products. Protein helps your brain send messages to the rest of your body, and helps create brain chemicals that improve your mood.Food and school are two interconnected topics. Children spend a large part of their day in school, so the food that is served in and around school greatly influences eating habits. Fast food in particular has proven to affect school children's health.</p>
                           <li class="center"><a href="#" class="button big special">Learn More</a></li>
                       </div>
                   </div>
               </section> 
            </div>
        )
    }
}
