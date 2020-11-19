import React from 'react'
import Icon1 from "../../images/1.svg"
import Icon2 from "../../images/1.svg"
import Icon3 from "../../images/1.svg"
import {ServicesContainer,ServicesCard,ServicesH1,ServicesH2,ServicesIcon,ServicesWrapper,ServicesP} from "./Serviceselem"
const Index = () => {
    return (
        <ServicesContainer id="service">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src="https://s.clipartkey.com/mpngs/s/48-481278_generating-clipart-age-range-transparent-age-group-icon.png" />
                    <ServicesH2>Content for all age groups</ServicesH2>
                    
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src="https://cdn2.vectorstock.com/i/1000x1000/81/51/magnifying-glass-with-documents-and-check-m-vector-1968151.jpg" />
                    <ServicesH2>Reliable, Verified Resources</ServicesH2>
                
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src="https://www.pngitem.com/pimgs/m/527-5271573_transparent-parent-and-child-clipart-cartoon-family-vector.png" />
                    <ServicesH2>Special section for Parents </ServicesH2>
                    
                </ServicesCard>
            </ServicesWrapper>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src="https://webstockreview.net/images/schedule-clipart-up-to-date-9.png" />
                    <ServicesH2>Up to Date courses</ServicesH2>
               </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src="https://www.jing.fm/clipimg/detail/186-1862326_social-media-clipart-social-interaction-social-tools.png" />
                    <ServicesH2>Interaction with our Team</ServicesH2>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src="https://www.epicentrofestival.com/wp-content/uploads/2019/11/Globe-World-Logo-Clip-Art-Portable-Network-Graphic-Globe-Logo-Clip-Art-Social-Science-Global-Persp-720x704.jpg" />
                    <ServicesH2>World-wide Accessibility</ServicesH2>
             </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Index
