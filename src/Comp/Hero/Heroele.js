import styled from 'styled-components'
import {MdKeyboardArrowRight,MdArrowForward} from "react-icons/md";
export const HeroContainer = styled.div`
background: #0c0c0c;
display: flex;
justify-content:center;
align-items:center;
padding: 0 30px;
height:625px;
position:relative;
z-index:1
:before{
    content: '';
    position:absolute;
     top:0; right:0; bottom:0;
      background:linear-gradient(180deg, rgba(0,0,0,0.2) 0%), rgba(0,0,0,0.6) 100%),
     linear-gradient(180deg,rgba(0,0,0,0.2) 0%,transparent 100%);
     z-index:2;
      left:0;
}
`;
export  const HeroBg = styled.div`
position:absolute;
top:0;
right:0;
bottom:0;
left:0;
width:100%;
height:100%;
overflow:hidden;
`;
export const VideoBg = styled.video`
width:100%;
height:100%;
-o-object-fit:cover;
object-fit:cover;
background:#232a34; opacity:.3;
`;
export const HeroContent = styled.div`
z-index:3;
max-width:1200px;
position:8px 24px;
padding:8px 24px;
display:flex;
flex-direction:column;
align-items:center;
`;
export const HeroH1 = styled.h1`
color:#fff;
font-size:42px;
text-align:center;

@media screen and (max-width:768px){
    font-size:38px;
}
@media screena nd(max-width: 480px){
    font-size:30px;
}
`;
export const HeroP= styled.p`
color:#fff;
font-size:24px;
text-align:center;
max-width:930px;
@media screen and (max-width:768px){
    font-size:24px;
}
@media screena nd(max-width: 480px){
    font-size:18px;
}
`;
export const HeroBtnWrapper = styled.div`
margin-top:32px;
display:flex;
flex-direction:column;
align-items:center;
`;
export const ArrowForward = styled(MdArrowForward)`
margin-left:8px;
font-siize:20px;
`;
export const ArrowRight = styled(MdKeyboardArrowRight)`
margin-left:8px;
font-siize:20px;
`;
