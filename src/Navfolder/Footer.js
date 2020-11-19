import React, { Component } from 'react'
import "../CSS/Home.css"
import "../CLAss/sidebar.css"
export default class Footer extends Component {
    render() {
        return (
            <footer class="page-footer grey darken-3">
                <div class="container">
                    <div class="row">
                        <div class="col s12 l6">
                            <h5 class="text-center">About Us</h5>
                            <p class="text-center">hello</p>
                        </div>
                        <div class="col s12 l4 offset-l2">
                            <h5>Connect</h5>
                            <ul id="footerlist">
                                <li><i class="fa fa-facebook" aria-hidden="true"> </i>
                                <a href="#" class="grey-text text-lighten-3"> Facebook</a></li>
                                <li><i class="fa fa-instagram" aria-hidden="true"> </i>
                                <a href="#" class="grey-text text-lighten-3"> Instagram</a></li>
                                <li><i class="fa fa-linkedin" aria-hidden="true"> </i>
                                <a href="#" class="grey-text text-lighten-3"> Linked In</a></li>
                                <li><i class="fa fa-twitter" aria-hidden="true"> </i>
                                <a href="#" class="grey-text text-lighten-3"> Twitter</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="footer-copyright grey darken-4">
                    <div class="container center-align">&copy; 2020 Career-Guidance</div>
                </div>
            </footer>
        )
    }
}
