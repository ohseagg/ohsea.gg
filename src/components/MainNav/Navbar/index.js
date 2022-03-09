import React from 'react'
import {Nav, NavbarContainer, NavBrand, NavImg, NavLogo, MobileIcon, BarIcon, NavMenu, NavMenuWrapper, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements'
import { colors } from "../../../globals/colors"
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
                            <NavLinks to='/events' activeClassName='nav-active'>
                                Events
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/about' activeClassName='nav-active'>
                                About 
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/contact' activeClassName='nav-active'>
                                Contact 
                            </NavLinks>
                        </NavItem>
                        <NavBtn> 
                            <NavBtnLink 
                            href='https://discord.gg/DB2zUppwSa'
                            target='_blank'
                            >Discord</NavBtnLink>
                        </NavBtn>
                    </NavMenu>
                </NavMenuWrapper>
            </NavbarContainer>
        </Nav>
    )
}

export default Navbar
