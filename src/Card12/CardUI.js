import React, { Component } from 'react'
import "../CSS/Card-style.css"
export default class CardUI extends Component {
  render() {
    return (
        <div class="col s12 l6"> 
        <div class="card pad1">
        
         <div class="img-container">
         <img src={this.props.imgsrc} alt="error" class="card-img-top"></img>
         </div>
         <div class="card-content">
             <span class="card-title text-center">{this.props.title}</span>
         </div>
         <a  className="btn btn-outline-success" href={this.props.link1}>{this.props.CLICK}</a>
        </div>
    </div>
    )
  }
}
