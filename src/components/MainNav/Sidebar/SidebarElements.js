import styled from 'styled-components'
import { Link } from "gatsby"
import {FaTimes} from 'react-icons/fa'
import {colors} from '../../../globals/colors'

export const SidebarContainer = styled.aside`
    position: fixed; 
    z-index: 999; 
    width: 100%; 
    height: 100%; 
    background: ${colors.background}; 
    display: grid; 
    align-items: center; 
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
    left: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`

export const CloseIcon = styled(FaTimes)`
    color: white; 
    transition: 0.2s ease-in-out;
    &:hover{
        color: ${colors.red};
        transition: 0.2s ease-in-out;
    }
`

export const Icon = styled.div`
    position: absolute; 
    top: 1.5rem; 
    right: 1.8rem; 
    background: transparent; 
    font-size: 2rem; 
    cursor: pointer; 
    outline: none; 
`

export const SidebarWrapper = styled.div`
    color: white; 
`

export const SidebarMenu = styled.ul`
    margin: 0;
    display: grid; 
    grid-template-columns: 1fr; 
    grid-template-rows: repeat(2, 100px); 
    text-align: center; 

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(2,80px); 
    }
`

export const SidebarLink = styled(Link)`
    display: flex; 
    align-items: center; 
    justify-content: center;
    font-size: 1.35rem; 
    font-family: 'UsualMedium', sans-serif;

    text-decoration: none; 
    list-style: none; 
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: white; 
    cursor: pointer; 

    &:hover{
        color: ${colors.red};
        transition: 0.2s ease-in-out;
    }
`

//Button styling 
export const SideBtnWrap = styled.div`
    display: flex; 
    justify-content: center; 
`

export const SidebarRoute = styled.a`
    border-radius: 15px;
    background: ${colors.red}; 
    white-space: nowrap; 
    padding: 12px 27px; 
    box-sizing: border-box;
    margin-top: 50px;

    color: ${colors.white}; 
    font-size: 1.1rem; 
    font-family: 'UsualRegular', sans-serif;

    outline: none;
    border: none; 
    box-shadow: none;
    cursor: pointer; 
    transition: all 0.2s ease-in-out; 
    text-decoration: none; 
    &:hover{
        transition: all 0.2s ease-in-out; 
        box-shadow: 0px 5px 20px -3px ${colors.red};
    }
`