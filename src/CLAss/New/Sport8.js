import React from 'react'
import { InfoWrapper,InfoRow,Column1,Column2,TextWrapper,ImgWrap,InfoContainer,TopLine,Heading,Subtitle,BtnWrap,Img } from '../../Comp/Info/InfoSection'
import Button from "../../Comp/ButtonElem"
const Sport8 = ({
    lightBg, 
    id,
    imgStart,
    topLine,
    headline,
    description,
    darkText,
    lightText,
    buttonlabel, img,to,
    alt}) => {
    return (
        <>
           <InfoContainer lightBg={lightBg} id={id}>
              <InfoWrapper>
                 <InfoRow imgStart={imgStart}>
                     <Column1>
                         <TextWrapper>
                             <TopLine>{topLine}</TopLine>
                             <Heading lightText={lightText}>{headline}</Heading>
                             <Subtitle darkText={darkText}>{description}</Subtitle>
                             <BtnWrap> 
                             <Button to={to}
                             smooth={true} duration={500} spy={true} exact="true" offset={-80}
                             >{buttonlabel}</Button>
                             </BtnWrap>
                         </TextWrapper>
                     </Column1>
                     <Column2>
                         <ImgWrap>
                             <Img src={img} alt={alt}/>
                         </ImgWrap>
                     </Column2>
                 </InfoRow>
              </InfoWrapper>
           </InfoContainer> 
        </>
    )
}

export default Sport8
