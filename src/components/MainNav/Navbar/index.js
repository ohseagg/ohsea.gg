import React from 'react'
import {Nav, NavbarContainer, NavBrand, NavImg, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements'
import {FaBars} from "react-icons/fa";
import "../../../styles/style.scss"

const Navbar = ({toggle}) => {
    return (
        <Nav>
            <div className="bg-ellipse"></div>
            <NavbarContainer>
                <NavBrand>
                    <NavImg to='/'>
                        <img src={require('../../../images/Logo.png').default} alt="OHSEA logo"/>
                    </NavImg>
                    <NavLogo to='/'>OHSEA</NavLogo>
                </NavBrand>
                <MobileIcon onClick = {toggle}>
                    <FaBars style ={{color: 'white'}}/>
                </MobileIcon>
                <div>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='/events' activeStyle>
                                Events & Leagues
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/about' activeStyle>
                                About 
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            {/* just open discord invite link? */}
                            <NavLinks to='/discord'>
                                Discord
                            </NavLinks>
                        </NavItem>
                        <NavBtn> 
                            <NavBtnLink to='/account'>Log In</NavBtnLink>
                        </NavBtn>
                    </NavMenu>
                </div>
            </NavbarContainer>
        </Nav>
    )
}

export default Navbar
