import React from 'react'
import styled from "styled-components"
import {colors} from '../../globals/colors.js'


const FinalReminder = () => {
  return (
    <Container>
        <Header>So what are you waiting for? <Subtitle>OHSEA is comitted to bringing Esports to High School Students and demonstrating an industry full of potential.</Subtitle></Header>
        
        <BtnDiv>
            <BtnLogIn>Log in</BtnLogIn>
            <BtnSignIn>Sign in</BtnSignIn>
        </BtnDiv>

    </Container>
  )
}
const Container = styled.div`
    background: ${colors.white}; 
    display: block;
    justify-content: center;
    height: 400px;
    @media screen and (max-width: 768px){
        padding: 100px 0; 
    }
`
const Header = styled.h1`
    height: 100px;
    text-align: center;
    position: relative;
    top: 100px;
    color: black; 
    font-size: 30px; 
    font-family: 'UsualBold', sans-serif; 
`

const Subtitle = styled.h2`
    font-size: 18px; 
    top: 10px;
    position: relative;
    text-align: center;
    color: black; 
    font-family: 'UsualBold', sans-serif; 
`
const BtnDiv = styled.div`
    margin-top: 7rem;
    height: 100px;
    display: flex;
`

const BtnSignIn = styled.div`
    justify-self: center;
    margin: auto;   
    right: 15rem;
    position: relative;
    border-radius: 10px;
    padding: 7px 26px 7px 26px; 
    display: inline;
    width: 6rem;
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

const BtnLogIn = styled.div`
    justify-self: center;
    margin: auto;
    left: 15rem;
    position: relative;
    border-radius: 10px;
    padding: 7px 26px 7px 26px; 
    display: inline;
    width: 6rem;
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

export default FinalReminder

