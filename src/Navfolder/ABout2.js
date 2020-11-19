import React, { Component } from 'react'
import About1 from "./ABout1.js"
import Service from "./Services.js"
import JsonData from './data.json';
import PortFolio from './Gallery'
export default class ABout2 extends Component {
    state = {
        landingPageData: {},
      }
      getlandingPageData() {
        this.setState({landingPageData : JsonData})
      }
    
      componentDidMount() {
        this.getlandingPageData();
      }
    render() {
        return (
            <div>
                <About1 data={this.state.landingPageData.About} />
                <Service data={this.state.landingPageData.Services} /> 
            </div>
        )
    }
}
