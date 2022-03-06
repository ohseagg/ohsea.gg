import React from 'react'
import { Link } from "gatsby"
import styled from "styled-components"
import {colors} from '../../globals/colors.js'


const FinalReminder = () => {
  return (
      <Wrapper>
        <Container>
            <Header>Let's Create Ontario's Future In Esports.
                <Subtitle>
                    OHSEA is comitted to bringing Esports to High School Students and demonstrating an industry full of potential.
                </Subtitle>
            </Header>
            
            <Link to='/events' style={{textDecoration: 'none'}}>
                <BtnFill>Get Started</BtnFill>
            </Link>

        </Container>
      </Wrapper>
  )
}
const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    background: ${colors.white}; 

`
const Container = styled.div`
    width: 1250px;
    max-width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;

`
const Header = styled.h1`
    text-align: center;
    margin-top: 100px;
    color: ${colors.background}; 
    font-family: 'UsualBold', sans-serif; 

    font-size: 1.8rem;
    line-height: 1.2em;
    @media screen and (max-width: 1000px) {
        margin-bottom: 10px;
    }
    @media screen and (max-width: 750px) {
        font-size: 5.4vw;
    }
    @media screen and (max-width: 685px) {
        margin-bottom: 0;
    }
    @media screen and (max-width: 445px) {
        font-size: 22px;
    }
`

const Subtitle = styled.h2`
    font-size: 1rem; 
    line-height: 1.5em; 
    margin-top: 30px;
    text-align: center;
    color: ${colors.background}; 
    font-family: 'UsualMedium', sans-serif; 
`

const BtnFill = styled.div`
    justify-self: center;
    position: relative;
    border-radius: 10px;
    padding: 9px 24px; 
    margin-bottom: 100px;
    font-size: 0.9rem; 
    outline: none;
    cursor: pointer; 
    text-decoration: none; 
    text-align: center;
    transition: all 0.2s ease-in-out;
    background: ${colors.red};
    color: ${colors.white}; 
    box-shadow: none;
    border: none; 
    &:hover{
        transition: all 0.2s ease-in-out; 
        box-shadow: 0px 4px 17px -2px ${colors.red};
    }
    @media screen and (max-width: 640px) {
        font-size: 0.8rem;
        padding: 6px 18px 6px 18px;
    }
`

export default FinalReminder

