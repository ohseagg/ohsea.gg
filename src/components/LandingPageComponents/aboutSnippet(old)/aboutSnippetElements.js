import styled from "styled-components"
import {colors} from '../../../globals/colors.js'

export const InfoContainer = styled.div`
    color: #fff;
    background: white;
    margin-bottom: 10rem;
    display: flex;
    justify-content: center;
    @media screen and (max-width: 768px){
        padding: 100px 0; 
    }
`

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr); 
    align-items: center;
    grid-template-areas: "col1 col2" ;
    width: 1250px;
    max-width: 90%;

    @media screen and (max-width: 768px) {
        grid-template-areas: 'col1' 'col2';
    }
`

export const Column1 = styled.div`
    grid-area: col1; 
    
`

export const Column2 = styled.div`
    margin-bottom: 15px; 
    padding: 0 15px; 
    grid-area: col2; 
`

export const TextWrapper = styled.div`
    max-width: 500px; 
  
    @media screen and (max-width: 480px){
        position: relative;
        right: 1rem;
    }
`

export const TopLine = styled.p`
    color: black; 
    font-size: 30px; 
    position: relative;
    line-height: 16px; 
    font-family: 'UsualBold', sans-serif; 
    letter-spacing: 1.4px; 
    text-transform: uppercase;
    @media screen and (max-width: 768px){
        top: 0;
    }
`
export const Buttonfill = styled.div`
    margin-top: 15px;
    border-radius: 10px;
    padding: 7px 26px 7px 26px; 
    display: flex;
    width: 7.5rem;
    align-items: center;
    font-size: 0.9rem; 
    outline: none;
    cursor: pointer; 
    text-decoration: none; 
    transition: all 0.2s ease-in-out;
    background: ${colors.red};
    color: ${colors.white}; 
    box-shadow: none;
    border: none; 
    &:hover{
        transition: all 0.2s ease-in-out; 
        box-shadow: 0px 4px 17px -2px ${colors.red};
    }
`

export const Subtitle = styled.p`
    max-width: 440px;
    font-size: 18px; 
    line-height: 24px; 
    color: black; 
`

export const Subtitle2 = styled.p`
    max-width: 440px; 
    margin-bottom: 35px;
    margin-top: 24px; 
    font-size: 18px; 
    line-height: 24px; 
    color: black; 
`


export const ImgWrap = styled.div`
    max-width: 555px; 
    height: 100%
`

export const Img = styled.img`
    width: 30rem;
    margin: 0 0 10px -50px;
    padding-right: 0;
`


