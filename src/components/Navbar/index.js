import React from 'react'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements'
import {FaBars} from "react-icons/fa";

const Navbar = () => {
    return (
        <Nav>
            <NavbarContainer>
                <NavLogo>OHSEA</NavLogo>
                <MobileIcon>
                    <FaBars style ={{color: 'white'}}/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks> About </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks> About </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks> About </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks> About </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks> About </NavLinks>
                    </NavItem>
                </NavMenu>

                <NavBtn> 
                    <NavBtnLink>Sign Up</NavBtnLink>
                </NavBtn>

                <NavBtn> 
                    <NavBtnLink>Log In</NavBtnLink>
                </NavBtn>

            </NavbarContainer>
        </Nav>
    )
}

export default Navbar
