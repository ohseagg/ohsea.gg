import styled from 'styled-components'
import {colors} from '../../globals/colors'
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
// import {Link} from 'gatsby'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Box = styled.div`
    border-radius: 10px;
    padding: 6px 20px 6px 20px; 
    margin: 0px 10px;
    display: flex;
    align-items: center;
    outline: none;
    
    font-size: 0.9rem; 
    text-decoration: none; 
    color: ${colors.white};
    font-weight: 400;
    user-select: none;

    background: "transparent"; 
    border: 2px solid ${colors.white}; 
`

export const LeftArrow = styled(GoChevronLeft)`
    color: ${colors.white};
    width: 24px;
    height: auto;
    margin: 3px;
    transition: all 0.2s ease-in-out; 
    &:hover{
        transition: all 0.2s ease-in-out; 
        color: ${colors.red};
    }
`

export const RightArrow = styled(GoChevronRight)`
    color: ${colors.white};
    width: 24px;
    height: auto;
    margin: 3px;
    transition: all 0.2s ease-in-out; 
    &:hover{
        transition: all 0.2s ease-in-out; 
        color: ${colors.red};
    }
`