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
      <div className="dark-bg bg-events">
        <TitleDiv>
          <IntroTitle>What is <span className="red-text">OHSEA?</span></IntroTitle>
          <IntroSubtitle><SubtitleRed>Learn more about OHSEA:</SubtitleRed>  The team behind the association, our goals, and future asipirations.</IntroSubtitle>
       </TitleDiv>
      </div>

      <AboutSnippet/>

      <div className="dark-bg bg-events">
      <Goals/>
      </div>


  </Layout>
)

const TitleDiv = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 1000px)
    {
        height: 1200px; 
    }
    @media screen and (max-width: 768px)
    {
        height: 1200px; 
    }
    @media screen and (max-width: 480px)
    {
        height: 1200px; 
    }
    `

const IntroTitle = styled.h1`
    color: ${colors.white};
    font-family: 'UsualExtraBold', sans-serif;
    font-size: 3.4rem;
    line-height: 1.05em;
    margin-top: 7rem;
    display: block;
    text-align: center;
    
`
const IntroSubtitle = styled.h3`
    color: ${colors.white};
    font-family: 'UsualRegular', sans-serif;
    font-size: 1.2rem;
    line-height: 1.05em;
    margin-top: 0;
    position: relative;
    text-align: center;

`

const SubtitleRed = styled.span`
    color: ${colors.red};
    font-family: 'UsualBold', sans-serif;
    margin-right: 6px;
`


export default About
