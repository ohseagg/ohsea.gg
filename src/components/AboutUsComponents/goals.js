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
        <SubTitle>Here are our three most important goals at OHSEA</SubTitle>

        <Goaldiv>
            <GoalOutline>
                <GoalIcon style = {{width: '130px', height: '130px'}}src={schoolIcon}/>
                <Goaltitle>Schools</Goaltitle>
                <GoalSubtitle>We want to bring Esports to schools to allow students a chance to experience an industry growing with potentital.</GoalSubtitle>
            </GoalOutline>

            <GoalOutline>
                <GoalIcon src = {educationIcon}/>
                <Goaltitle>Experience</Goaltitle>
                <GoalSubtitle>Experience is a big priority for us and we want students to see the different career opportunities they have in Esports.</GoalSubtitle>
            </GoalOutline>

            <GoalOutline>
                <GoalIcon src = {playIcon}/>
                <Goaltitle>Play</Goaltitle>
                <GoalSubtitle>At the end of the day, we want students to have fun and enjoy themselves whether it be in tournamnets or managing them.</GoalSubtitle>
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
    font-size: 25px;
    position: absolute;
    margin-top: 9rem;
    text-align: center;
    justify-content: center;
`

const GoalSubtitle = styled.h1`
    color: white;
    font-size: 18px;
    position: absolute;
    text-align: center;
    width: 250px;
    margin-top: 13rem;
`

const Title = styled.h1`
    color: ${colors.white};
    font-family: 'UsualExtraBold', sans-serif;
    font-size: 3.4rem;
    line-height: 1.05em;
    margin-top: 3rem;
    display: block;
    text-align: center;
`

const SubTitle = styled.h3`
    color: ${colors.white};
    font-family: 'UsualExtraBold', sans-serif;
    font-size: 1.2rem;
    line-height: 1.05em;
    margin-top: 0;
    text-align: center;
    position: relative;
`

const MainDiv = styled.div`
    height: 1200px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: ${colors.background}; 

    @media screen and (max-width: 1000px)
    {
        height: 1300px; 
    }
    @media screen and (max-width: 768px)
    {
        height: 1300px; 
    }
    @media screen and (max-width: 480px)
    {
        height: 1300px; 
    }
`

const Goaldiv = styled.div`
    max-width: 1000px; 
    margin: 0 auto; 
    display: grid; 
    grid-template-columns: 1fr 1fr 1fr; 
    align-items: center; 
    grid-gap: 5rem;
    padding: 0 50px;     
    justify-content: center;
    @media screen and (max-width: 1000px)
    {
        grid-template-columns: 1fr 1fr; 
    
    }
    @media screen and (max-width: 768px)
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
`



export default Goals