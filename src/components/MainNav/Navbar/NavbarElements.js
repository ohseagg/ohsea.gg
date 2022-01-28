import styled from 'styled-components'
import {colors} from '../../../globals/colors.js'

export const Nav = styled.nav`
    background: ${colors.background};
    height: 80px;
    margin-top: -60px; 
    display: flex; 
    justify-content: center; 
    font-size: 0.9rem; 
    position: sticky; 
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
    padding: 0 24px; 
    max-width: 1100px;
`

export const NavBrand = styled.div`
    display: flex;
    height: 100%;
    align-items: center; 
    margin-left: 24px; 
`

export const NavLogo = styled.h1`
    color: ${colors.white}; 
    justify-self: flex-start; // ?
    cursor: pointer; 
    font-size: 1.75rem; 
    text-decoration: none; 
`

export const NavMenu = styled.ul`
    display: flex; 
    align-items: center; 
    margin-top: auto;
    list-styled: none; 
    text-align: center; 

    @media screen and (max-width: 768px) {
        display: none; 
    }
`

export const NavItem = styled.li`
    height: 80px; 
`

export const NavLinks = styled.p`
    color: ${colors.white}; 
    display: flex; 
    align-items: center; 
    text-decoration: none; 
    padding: 0 0.85rem; 
    height: 100%; 
    cursor: pointer; 

    &.active {
        border-bottom: 3px solid green; 
    }
`

//mobile icon styling 
export const MobileIcon = styled.div`
    display: none; 

    @media screen and (max-width: 768px){
        display: block; 
        position: absolute; 
        top: 0; 
        right: 0;
        transform: translate(-100%, 60%); 
        font-size: 1.8rem; 
        cursor: pointer; 
    }
`

//button styling 
export const NavBtnContainer = styled.div`
    margin-left: 1rem;
`

export const NavBtn = styled.nav`
    display: flex; 
    padding: 0 0.5rem; 
    margin-top: -10px;
    
    @media screen and (max-width: 768px){
        display: none;
    }
`
    
export const NavBtnLink1 = styled.div`
    border-radius: 6px;
    background: ${colors.red1}; 
    white-space: nowrap; 
    padding: 7px 22px 7px 22px; 
    box-sizing: border-box;
    color: ${colors.white}; 
    font-size: 0.9rem; 
    outline: none;
    border: none; 
    cursor: pointer; 
    transition: all 0.2 ease-in-out; 
    text-decoration: none; 
    &:hover{
        transition: all 0.2s ease-in-out; 
        background: ${colors.white}; ; 
        color: black;
    }
`

export const NavBtnLink2 = styled.div`
    border-radius: 6px;
    background: transparent; 
    white-space: nowrap; 
    padding: 7px 22px 7px 22px; 
    box-sizing: border-box;
    color: ${colors.red1}; 
    font-size: 0.9rem;
    font-weight: 700;
    outline: none;
    border: 2px solid ${colors.red1};
    cursor: pointer; 
    transition: all 0.2 ease-in-out; 
    text-decoration: none; 
    &:hover{
        transition: all 0.2s ease-in-out; 
        background: ${colors.white}; ; 
        color: black;
    }
`