import React from 'react'
import {Nav, NavbarContainer, NavBrand, NavImg, NavLogo, MobileIcon, BarIcon, NavMenu, NavMenuWrapper, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements'
import "../../../styles/style.scss"

const Navbar = ({toggle}) => {
    return (
        <Nav>
            <NavbarContainer>
                <NavBrand>
                    <NavImg to='/'>
                        <img className="nav-logo" src={require('../../../images/Logo.png').default} alt="OHSEA logo"/>
                    </NavImg>
                    <NavLogo to='/'>OHSEA</NavLogo>
                </NavBrand>
                <MobileIcon onClick = {toggle}>
                    <BarIcon/>
                </MobileIcon>
                <NavMenuWrapper>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='/events' activeStyle>
                                Events
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/' activeStyle>
                                About 
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            {/* just open discord invite link*/}
                            <NavLinks to='https://discord.gg/DB2zUppwSa'>
                                Discord
                            </NavLinks>
                        </NavItem>
                        <NavBtn> 
                            <NavBtnLink to='/'>Log In</NavBtnLink>
                        </NavBtn>
                    </NavMenu>
                </NavMenuWrapper>
            </NavbarContainer>
        </Nav>
    )
}

export default Navbar
