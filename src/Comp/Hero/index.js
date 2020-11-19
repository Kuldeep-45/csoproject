import React,{useState} from 'react'
import Button from "../ButtonElem"
import Video from "../../videos/video.mp4"
import {
    VideoBg, HeroContainer, HeroBg, HeroContent, HeroBtnWrapper, ArrowForward, ArrowRight,HeroH1,HeroP} from "./Heroele"
 const HeroSection = () => {
     const [hover,setHover] = useState(false)
     const onHover = ()=>{
         setHover(!hover)
     }
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Welcome To Edu-Track</HeroH1>
                <HeroP>
                Edu Track help students understand their strengths and weaknesses and then match 
                them with their skills and interest so that they get the best suitable career choice.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to='/students' onMouseEnter={onHover} onMouseLeave={onHover}
                    primary='true' dark='true'
                    >
                        Get Started {hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;
