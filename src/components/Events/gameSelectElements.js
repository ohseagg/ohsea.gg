import styled from 'styled-components'
import {colors} from '../../globals/colors'
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
import {Link} from 'gatsby'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Box = styled.div`
    border-radius: 10px;
    padding: 6px 20px 6px 20px; 
    display: flex;
    align-items: center;
    font-size: 0.9rem; 

    outline: none;
    text-decoration: none; 
    background: "transparent"; 
    border: 2px solid ${colors.white}; 
    color: ${colors.white};
`

export const LeftArrow = styled(GoChevronLeft)`
    color: ${colors.white};
    width: 24px;
    height: auto;
    margin: 10px;
    cursor: pointer;
`

export const RightArrow = styled(GoChevronRight)`
    color: ${colors.white};
    width: 24px;
    height: auto;
    margin: 10px;
    cursor: pointer;
`