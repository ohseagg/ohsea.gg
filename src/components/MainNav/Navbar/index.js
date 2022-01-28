import React from 'react'
import {Nav, NavbarContainer, NavBrand, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtnContainer, NavBtn, NavBtnLink1, NavBtnLink2} from './NavbarElements'
import {FaBars} from "react-icons/fa";

const Navbar = ({toggle}) => {
    return (
        <Nav>
            <NavbarContainer>
                <NavBrand>
                    <img src={require('../../../images/Logo.png')} alt="OHSEA Logo"/>
                    <NavLogo>OHSEA</NavLogo>
                </NavBrand>
                <MobileIcon onClick = {toggle}>
                    <FaBars style ={{color: 'white'}}/>
                </MobileIcon>
                <div>
                    <NavMenu>
                        <NavItem>
                            <NavLinks> Events & Leagues </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks> About </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks> Discord </NavLinks>
                        </NavItem>
                        <NavBtnContainer>
                            <NavBtn> 
                                <NavBtnLink1>Sign Up</NavBtnLink1>
                            </NavBtn>
                        </NavBtnContainer>
                        <NavBtn> 
                            <NavBtnLink2>Log In</NavBtnLink2>
                        </NavBtn>
                    </NavMenu>
                </div>
            </NavbarContainer>
        </Nav>
    )
}

export default Navbar
