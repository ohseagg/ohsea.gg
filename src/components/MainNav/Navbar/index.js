import React from 'react'
import {Nav, NavbarContainer, NavBrand, NavImg, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtnContainer, NavBtn, NavBtnLink1, NavBtnLink2} from './NavbarElements'
import {FaBars} from "react-icons/fa";

const Navbar = ({toggle}) => {
    return (
        <Nav>
            <NavbarContainer>
                <NavBrand>
                    <NavImg to='/'>
                        <img src={require('../../../images/Logo.png').default}/>
                    </NavImg>
                    <NavLogo to='/'>OHSEA</NavLogo>
                </NavBrand>
                <MobileIcon onClick = {toggle}>
                    <FaBars style ={{color: 'white'}}/>
                </MobileIcon>
                <div>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='/events-leagues' activeStyle>
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
                        <NavBtnContainer>
                            <NavBtn> 
                                <NavBtnLink1 to='/sign-up'>Sign Up</NavBtnLink1>
                            </NavBtn>
                        </NavBtnContainer>
                        <NavBtn> 
                            <NavBtnLink2 to='/log-in'>Log In</NavBtnLink2>
                        </NavBtn>
                    </NavMenu>
                </div>
            </NavbarContainer>
        </Nav>
    )
}

export default Navbar
