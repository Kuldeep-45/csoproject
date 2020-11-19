import React from 'react'
import { CloseIcon, Icon, SidebarContainer,SideBtnWrap,SidebarLink,SidebarRoute,SidebarWrapper,SidebarMenu } from "./Sideelem"
const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                    <SidebarLink to="service" onClick={toggle}>Service</SidebarLink>
                    <SidebarLink to="content" onClick={toggle}>Content</SidebarLink>
                    <SidebarLink to="/signup" onClick={toggle}>Sign up</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/signin">Sign In</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;