import * as React from "react"
import { GoChevronRight } from 'react-icons/go';
import { Link } from "gatsby"
import styled from "styled-components"
import {colors} from '../globals/colors.js'
// import { GoChevronRight } from 'react-icons/go';
// import { Link } from "gatsby"
import Layout from "../components/PageLayout/layout"
import Seo from "../components/SEO/seo"
import AboutSnippet from "../components/AboutUsComponents/aboutSnippet";
import Goals from '../components/AboutUsComponents/goals.js'
import "../styles/style.scss"

const About = () => (
  <Layout>
    <Seo title="About" />
        <div className="dark-bg bg-about">
            <TitleWrapper>
                <TitleContainer>
                    <TitleDiv>
                        <IntroTitle>What is <span className="red-text">OHSEA?</span></IntroTitle>
                        <IntroSubtitle>Learn about the team behind the association, our goals, and future asipirations.</IntroSubtitle>
                    </TitleDiv>
                </TitleContainer>
            </TitleWrapper>
        </div>

        <AboutSnippet/>

            
        <div className="dark-bg-container-3">
            <div className="dark-bg"></div>
        </div>
        <Goals/>


  </Layout>
)

const TitleDiv = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const TitleWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 7rem;
    @media screen and (max-width: 685px) {
        margin-top: 50px;
        margin-bottom: 100px;
    }
`

const TitleContainer = styled.div`
    width: 1250px;
    max-width: 90%;
`

const IntroTitle = styled.h1`
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
const IntroSubtitle = styled.h3`
    color: ${colors.white};
    font-family: 'UsualRegular', sans-serif;
    font-size: 1.1rem;
    line-height: 1.5em;
    margin-top: 0;
    position: relative;
    text-align: center;
    @media screen and (max-width: 685px) {
        font-size: 2.6vw;
    }
    @media screen and (max-width: 520px) {
        font-size: 0.9rem;
    }
`


export default About
