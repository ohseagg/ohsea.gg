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
                    <SidebarLink to='/events'>Events</SidebarLink>
                    <SidebarLink to='/about'>About Us</SidebarLink>
                </SidebarMenu>

                <SideBtnWrap>
                    <SidebarRoute
                    href="https://discord.com/invite/zWc8fymdrG"
                    target="_blank"
                    >Discord</SidebarRoute>
                </SideBtnWrap>

            </SidebarWrapper>

        </SidebarContainer>
    )
}

export default Sidebar
