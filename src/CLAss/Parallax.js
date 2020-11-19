import React, { Component } from 'react'
import img1 from "../images/stars.jpg"
export default class Parallax extends Component {
    render() {
        return (
            <div>
                <div class="parallax-container">
                    <div class="parallax">
                        <img src={img1} alt="" class="responsive-img"></img>
                    </div>
                </div>
            </div>
        )
    }
}
