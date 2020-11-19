import React,{useState}from 'react'
import { FaBars} from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll'
import {MobileIcon, Nav, NavbarContainer, NavItem, NavLinks, Navlogo, NavMenu,NavBtns,NavBtnLinks} from "./Navelem"
 const Navbar = ({toggle}) => {
     const toggleHome =()=>{
         scroll.scrollToTop();
     }
    return (
        <>
        <Nav>
            <NavbarContainer>
                <Navlogo to="/" onClick={toggleHome}>Edu-Track</Navlogo>
                <NavMenu>
                        <NavBtnLinks to='/' onClick={toggleHome}>Home</NavBtnLinks>
                    <NavItem>
                        <NavLinks to='about' smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                        About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='service' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Service</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='content' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Content</NavLinks>
                    </NavItem>
                    <NavBtnLinks to="/signup" >Sign up</NavBtnLinks>
                    <NavBtnLinks to="/signin">Sign In</NavBtnLinks>
                </NavMenu>
            </NavbarContainer>
        </Nav>
        </>
    )
}
export default Navbar