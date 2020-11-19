import React, { Component } from 'react'
import Card from './CardUI'
import "../CSS/Card-style.css"
export default class EngExam extends Component {
    render() {
        return (
        <div className="container">
        <div className="row">
         <Card imgsrc="https://img.theweek.in/content/dam/week/news/images/2020/jee-main-theweek.jpg" title="Jee Main" CLICK="CLICK HERE" link1="https://jeemain.nta.nic.in/"/> 
         <Card imgsrc="https://blog.examin.co.in/wp-content/uploads/2018/12/JEE-Advanced-2019.jpg" title="Jee Adv" CLICK="CLICK HERE" link1="https://jeeadv.ac.in/"/> 
         <Card imgsrc="https://www.getatoz.com/media/small/798766233bitsat.jpg" title="BITSAT" CLICK="CLICK HERE" link1="https://www.bitsadmission.com/"/> 
        </div>
        <div className="row">
         <Card imgsrc="https://www.edufever.com/wp-content/uploads/2019/01/COMEDK-UGET-2019-min.jpg" title="COMEDk" CLICK="CLICK HERE" link1="https://www.comedk.org/"/> 
         <Card imgsrc="https://upload.wikimedia.org/wikipedia/commons/c/c3/WBJEE.jpg" title="WBJEE" CLICK="CLICK HERE" link1="https://wbjeeb.nic.in/"/> 
         <Card imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRZih6OR5s_wtlzACTeB7-3oBemM56uw-P_g&usqp=CAU" title="GATE" CLICK="CLICK HERE" link1="https://en.wikipedia.org/wiki/Graduate_Aptitude_Test_in_Engineering"/>
        </div>
        </div>
        )
    }
}
