import React, { Component } from 'react'
import img1 from "../../images/food1.jpg"
import img2 from "../../images/sport1.jpg"

import ".././sidebar.css"
export default class Physical0 extends Component {
    render() {
        return (
            <div class="finalsportdiv8 white">
               <section class="container section" id="photos">
                   <div class="scrollspy row" id="photo1">
                       <div>
                           <img src="https://i.ytimg.com/vi/3_oIssULEk0/hqdefault.jpg" alt="" class="responsive-img"></img>
                       </div>
                       <div class="col">
                           <h2 class="indigo-text text-darken-4 text-center">Physical activities for kids</h2>
                           <p class="text-center paraclass">Physical activity is any activity that involves moving your body. It includes everyday activities, physically active play, and organised sports and exercise.Physical activity is vital for children’s health, wellbeing and development, now and in the future.</p>
                         	<ul><li class="center"><a href="https://activeforlife.com/49-fun-physical-activities-to-do-with-kids-aged-2-to-4/" class="button big special">Article</a></li>
                             <li class="center"><a href="https://www.youtube.com/embed/JoF_d5sgGgc" class="button big special">Videos</a></li>
                             </ul>
                       </div>
                   </div>
                   <div class="scrollspy row" id="sport1">
                       
                       <div class="col">
                           <h2 class="indigo-text text-darken-4 text-center">Physical activities for toddlers and preschoolers</h2>
                           <p class="text-center paraclass">Physical activity strengthens children’s bones, muscles, hearts and lungs,improves children’s coordination, balance, posture and flexibility,helps children stay at a healthy weight,reduces children’s risk of getting heart disease, cancer and type-2 diabetes later in life.</p>
                         	<ul><li class="center"><a href="https://playworld.com/blog/12-indoor-physical-activities-for-toddlers-and-preschoolers/" class="button big special">Articles</a></li>
                             <li class="center"><a href="https://www.youtube.com/embed/Z5VMThf0sM4" class="button big special">Videos</a></li>
                             </ul>
                             
                       </div>
                       <div>
                           <img src="https://cdn2.momjunction.com/wp-content/uploads/2015/01/Activities-For-Toddler.jpg" alt="" class="responsive-img"></img>
                       </div>
                   </div>
                   <div class="scrollspy row" id="acad1">
                       <div>
                           <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/children-exercising-in-fitness-class-royalty-free-image-135205468-1562617646.jpg?crop=0.770xw:1.00xh;0.179xw,0&resize=640:*" alt="" class="responsive-img sportimg"></img>
                       </div>
                       <div class="col">
                           <h2 class="indigo-text text-darken-4 text-center">Physical Fitness for 4 and 5 yr kids</h2>
                           <p class="text-center paraclass">Children aged 3 years up to 5 years should be physically active for at least three hours each day. This includes one hour of energetic play.Children aged 5 years up to 8 years should do at least one hour of moderate to vigorous physical activity plus several hours of light physical activity each day. And at least three days a week, this should include activities that strengthen muscles and bones.</p>
                         	<ul><li class="center"><a href="https://kidshealth.org/en/parents/fitness-4-5.html" class="button big special">Articles</a></li>
                             <li class="center"><a href="https://www.youtube.com/embed/5if4cjO5nxo" class="button big special">Videos</a></li>
                             <li class="center"><a href="https://www.rasmussen.edu/degrees/education/blog/fun-fitness-activities-for-kids/" class="button big special">Bonus Article</a></li></ul>
                       </div>
                   </div>
                  
               </section> 
            </div>
        )
    }
}