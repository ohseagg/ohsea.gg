import styled from 'styled-components'
import {colors} from '../../../globals/colors'
import {Link} from 'gatsby' // changed to gatsby links  for now as react-router-dom conflicts the build 
import {FaBars} from "react-icons/fa";

export const Nav = styled.nav`
    background: 'transparent';
    height: 80px;
    margin-top: 10px; 
    display: flex; 
    justify-content: center; 
    font-size: 0.9rem; 
    top: 0; 
    z-index: 10; 

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease; 
    }
`
export const NavbarContainer = styled.div`
    display: flex; 
    justify-content: space-between; 
    height: 80px; 
    z-index: 1; 
    width: 100%; 
    max-width: 90%;
    width: 1250px;
`

export const NavBrand = styled.div`
    display: flex;
    height: 100%;
    align-items: center; 
    cursor: pointer; 

`

export const NavImg = styled(Link)`
    margin-bottom: 0;
    margin-top: 0.3rem;
    margin-right: 10px;
`

export const NavLogo = styled(Link)`
    color: ${colors.white}; 
    font-family: 'UsualBold', sans-serif;
    font-size: 1.75rem; 
    text-decoration: none; 
    @media screen and (max-width: 400px) {
        font-size: 1.55rem; 
    }
`

export const NavMenuWrapper = styled.div`
    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavMenu = styled.ul`
    display: flex; 
    align-items: center; 
    margin-top: auto;
    list-styled: none; 
    text-align: center; 
    list-style-type: none;
    @media screen and (max-width: 768px) {
        display: none; 
    }
`

export const NavItem = styled.li`
    height: 80px; 
    padding: 0 0.5rem; 
    display: flex;
    align-items: center;

`

export const NavLinks = styled(Link)`
    color: ${colors.white}; 
    display: flex; 
    align-items: center; 
    text-decoration: none; 
    height: 48%; 
    cursor: pointer; 
    background-color: 'transparent'; 
    padding: 0px 15px;
    border-radius: 10px;
    transition: all 0.1s ease-in-out; 
    font-family: 'UsualRegular', sans-serif;
    &:hover{
        background-color: #ffffff11; 
        transition: all 0.1s ease-in-out; 
    }
    &.active {
        color: ${colors.red};
    }
`

//mobile icon styling 
export const MobileIcon = styled.div`
    display: none; 

    @media screen and (max-width: 768px){
        display: flex;
        height: 100%; 
        align-items: center;
        font-size: 1.8rem; 
        cursor: pointer; 
    }
`

export const BarIcon = styled(FaBars)`
    color: ${colors.white};
    @media screen and (max-width: 500px) {
        height: 25px;
        width: 25px;
    }
`

export const NavBtn = styled.nav`
    display: flex; 
    margin-top: -10px;
    margin-left: 1.3rem;
   
    @media screen and (max-width: 768px){
        display: none;
    }
`
    
export const NavBtnLink = styled(Link)`
    border-radius: 10px;
    background: ${colors.red}; 
    white-space: nowrap; 
    padding: 7px 22px 7px 22px; 
    box-sizing: border-box;
    color: ${colors.white}; 
    font-size: 0.9rem; 
    outline: none;
    border: none; 
    box-shadow: none;
    cursor: pointer; 
    transition: all 0.2s ease-in-out; 
    text-decoration: none; 
    &:hover{
        transition: all 0.2s ease-in-out; 
        box-shadow: 0px 4px 17px 0px ${colors.red};
    }
`