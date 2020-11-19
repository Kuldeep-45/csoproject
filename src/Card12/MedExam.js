import React, { Component } from 'react'
import Card from './CardUI'
import "../CSS/Card-style.css"
export default class MedExam extends Component {
    render() {
        return (
        <div className="container">
        <div className="row">
         <Card imgsrc="https://www.apnaahangout.com/wp-content/uploads/2020/02/NEET-UG-2021.png" title="Neet UG" CLICK="CLICK HERE" link1="ntaneet.nic.in"/> 
         <Card imgsrc="https://mk0ehealtheletsj3t14.kinstacdn.com/wp-content/uploads/2020/01/NEET-PG-2020.png" title="Neet PG" CLICK="CLICK HERE" link1="https://en.wikipedia.org/wiki/National_Eligibility_cum_Entrance_Test_(Postgraduate)"/> 
         <Card imgsrc="https://medicaldialogues.in/h-upload/2020/04/29/127968-medical-background.jpg" title="AIIMS PG" CLICK="CLICK HERE" link1="https://medicine.careers360.com/exams/aiims-pg"/> 
        </div>
        <div className="row">
         <Card imgsrc="https://www.successcds.net/images/jipmer-pg-medical-entrance-exam.jpg" title="JIPMER PG" CLICK="CLICK HERE" link1="https://www.jipmer.edu.in/"/> 
         <Card imgsrc="https://www.successcds.net/images/pgi-chandigarh-entrance-exam.jpg" title="PGIMER EXAM" CLICK="CLICK HERE" link1="https://pgimer.edu.in/"/> 
         <Card imgsrc="https://medicaldialogues.in/h-upload/2020/04/23/127728-neet-exam-preparation.jpg" title="TIPS FOR NEET" CLICK="CLICK HERE" link1="/neetguide"/>
        </div>
        </div>
        )
    }
}
