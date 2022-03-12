import React from 'react'
import styled from "styled-components"
import {colors} from '../../globals/colors.js'
import playIcon from '../../images/play.svg'
import schoolIcon from '../../images/school.svg'
import educationIcon from '../../images/education.svg'

const Goals = () => {
  return (
    <MainDiv>
        <Title>Our <span style = {{color: '#de333f'}}>Goals</span></Title> 

        <Goaldiv>
            <GoalOutline>
                <GoalIcon style = {{width: '130px', height: '130px'}}src={schoolIcon}/>
                <Goaltitle>Schools</Goaltitle>
                <GoalSubtitle>Bringing Esports to schools to allow students a chance to experience an industry growing with potential.</GoalSubtitle>
            </GoalOutline>

            <GoalOutline>
                <GoalIcon src = {educationIcon}/>
                <Goaltitle>Experience</Goaltitle>
                <GoalSubtitle>Allowing students to see and experience the different career opportunities they have in Esports.</GoalSubtitle>
            </GoalOutline>

            <GoalOutline>
                <GoalIcon src = {playIcon}/>
                <Goaltitle>Play</Goaltitle>
                <GoalSubtitle>Ultimately, we push for students to have fun and enjoy themselves, whether it be in running tournaments or playing in them.</GoalSubtitle>
            </GoalOutline>

        </Goaldiv>
    </MainDiv>
  )
}

const GoalIcon = styled.img`
    display: flex;
    align-items: center;
    height: 150px; 
    width: 150px; 
    margin-bottom: 10px; 
`

const Goaltitle = styled.h1`
    color: white;
    font-size: 1.5rem;
    position: absolute;
    margin-top: 9rem;
    text-align: center;
    justify-content: center;
`

const GoalSubtitle = styled.h3`
    color: white;
    font-size: 1rem;
    line-height: 1.5em;
    position: absolute;
    text-align: center;
    width: 250px;
    margin-top: 13rem;
    font-family: 'UsualRegular', sans-serif;
    @media screen and (max-width: 1000px)
    {
        width: 50%;
    }
    @media screen and (max-width: 650px)
    {
        width: 70%;
    }
    @media screen and (max-width: 450px)
    {
        width: 80%;
    }
`

const Title = styled.h1`
    color: ${colors.white};
    font-family: 'UsualExtraBold', sans-serif;
    font-size: 3.4rem;
    line-height: 1.05em;
    margin-top: 0;
    display: block;
    text-align: center;
    @media screen and (max-width: 750px) {
        font-size: 7.85vw;
    }
`

const MainDiv = styled.div`
    height: 600px;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    background: 'transparent'; 
    margin-bottom: 0;

    @media screen and (max-width: 1000px)
    {
        height: 1260px; 
    }
    @media screen and (max-width: 768px)
    {
        height: 1350px; 
    }
    @media screen and (max-width: 480px)
    {
        /* height: 900px;  */
    }
`

const Goaldiv = styled.div`
    max-width: 1150px; 
    margin: 0 auto; 
    display: grid; 
    grid-template-columns: 1fr 1fr 1fr; 
    align-items: center; 
    grid-column-gap: 5rem;
    padding: 0 50px;     
    justify-content: center;
    @media screen and (max-width: 1150px)
    {
        grid-column-gap: 3rem;
    }
    @media screen and (max-width: 1000px)
    {
        grid-template-columns: 1fr; 
    }

    @media screen and (max-width: 480px){
        margin-top: 1rem;
        position: relative;
        top: 5%;
    }   
`

const GoalOutline = styled.div`
    display: flex; 
    flex-direction: column; 
    justify-content: flex-start; 
    align-items: center;
    max-height: 600px; 
    width: 300px;
    height: 400px;
    padding: 50px; 
    @media screen and (max-width: 1150px)
    {
        width: 250px;
    }
    @media screen and (max-width: 1000px)
    {
        width: 100%;
    }
`



export default Goals