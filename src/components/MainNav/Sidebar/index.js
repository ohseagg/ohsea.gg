import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>

            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink> About Us </SidebarLink>
                    <SidebarLink> About Us </SidebarLink>
                    <SidebarLink> About Us </SidebarLink>
                    <SidebarLink> About Us </SidebarLink>
                </SidebarMenu>

                <SideBtnWrap>
                    <SidebarRoute>Sign In</SidebarRoute>
                </SideBtnWrap>

            </SidebarWrapper>

        </SidebarContainer>
    )
}

export default Sidebar
