import React, { useState} from 'react'

import HeroSection from '../Comp/Hero'
import InfoSection from '../Comp/Info/Index'
import { homeObjOne,homeObjTwo,homeObjThree } from '../Comp/Info/Data'
import Services from "../Comp/Services/Index"
 const Home = () => {
    return (
     <>
     <HeroSection />
     <InfoSection {...homeObjTwo}/>
     <InfoSection {...homeObjOne}/>
     <Services/>
     </>
    )
}
export default Home;    
