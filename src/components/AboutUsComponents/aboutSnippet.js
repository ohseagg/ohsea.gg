import React from 'react'
import styled from "styled-components"
import {colors} from '../../globals/colors.js'
import placeholder from '../../images/logoSpring.png'
import '../../styles/style.scss'


const AboutSnippet = () => {
  return (
    <Wrapper>
      <InfoContainer>
        <InfoRow>
          
          <Column1>
            <TopLine>Who Are We?</TopLine>
              <TextWrapper>                        

                  <Subtitle><span className="red-text-b">OHSEA</span>, short for the <span className="red-text-b">Ontario High School Esports Association</span>, is composed of highly dedicated high school and university students seeking to develop Esports to a high school level. We believe high school students should have the ability to express their interest in gaming, run their own clubs, and compete in a safe and fair environment.</Subtitle>
                  <Subtitle2>We want to <span className="red-text-b">demonstrate</span> that there is more to Esports than just the game. As one of the fastest growing industries in the world, there are opportunities for people in esports from all disciplines - whether it be business, engineering, math, finance, marketing, art and more. We plan to offer <span className="red-text-b">school clubs support</span>, regular educational workshops, and a competitive league to maximize students' educational learning from esports.</Subtitle2>
                  <Subtitle2>Whether you are an educator or a student, opportunities are plentiful in esports. We want to provide a platform for you to take your first steps in the industry. Everyone at OHSEA understand the challenges that are presented and are <span className="red-text-b">committed</span> to our goals.</Subtitle2>


              </TextWrapper>

          </Column1>
        
          <Column2>
            <ImgWrap>
              <Img src={placeholder}/>
            </ImgWrap>
          </Column2>

        </InfoRow>
      </InfoContainer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`

const InfoContainer = styled.div`
    width: 1250px;
    max-width: 90%;
    margin-top: 18rem;
    margin-bottom: 12rem;
    display: flex;
    justify-content: center;
    @media screen and (max-width: 685px) {
        margin-top: 10rem;
        margin-bottom: 8rem;
    }
    @media screen and (max-width: 500px) {
        margin-top: 8rem;
        margin-bottom: 6rem;
    }
`

const InfoRow = styled.div`
    display: grid;
    grid-gap: 7rem;
    grid-auto-columns: minmax(auto, 1fr); 
    align-items: center;
    grid-template-areas: "col1 col2" ;


    @media screen and (max-width: 1000px) {
        grid-template-areas: 'col1' 'col2';
    }
`

const Column1 = styled.div`
    grid-area: col1; 
    /* width: 600px; */
    width: 100%;
    
`

const Column2 = styled.div`
    margin-bottom: 15px; 
    grid-area: col2;
    @media screen and (max-width: 1000px) {
        display: none;
    }
`

const TextWrapper = styled.div`
    max-width: 700px; 
`

const TopLine = styled.p`
    color: ${colors.background};
    font-size: 1.8rem; 
    line-height: 0.95em;
    position: relative;
    font-family: 'UsualBold', sans-serif; 
    margin-bottom: 2em;
    
    @media screen and (max-width: 768px){
        top: 0;
    }
    @media screen and (max-width: 750px) {
        font-size: 5.4vw;
    }
    @media screen and (max-width: 445px) {
        font-size: 22px;
    }
`
    
const Subtitle = styled.p`
    font-size: 1rem; 
    line-height: 1.9rem; 
    color: ${colors.background};
    
`

const Subtitle2 = styled.p`
    margin-bottom: 35px;
    margin-top: 24px; 
    font-size: 1rem; 
    line-height: 1.9rem; 
    color: ${colors.background};
`


const ImgWrap = styled.div`
    max-width: 555px; 
    height: 100%
`

const Img = styled.img`
    padding-right: 0;
`



export default AboutSnippet