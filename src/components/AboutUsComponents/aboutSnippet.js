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

                  <Subtitle>The <span className="red-text-b">Ontario High School Esports Association</span> or for short, <span className="red-text-b">OHSEA</span>, is an association of highly dedicated high school and university students who are seeking to bring <span className="red-text-b">Esports</span> to a high school level. High school students should experience the same Esports opportunities that university/college students and professionals do, and demonstrate them for new career opportunities.</Subtitle>
                  <Subtitle2>At OHSEA, our goal is to not just to provide fun tournaments of a variety of games to students, but to also demonstrate that there is more to Esports than just the game. We want students to learn what goes behind the scenes of tournaments and give them hands-on experience of what it takes to run one.</Subtitle2>
                  <Subtitle2>Using our three goals as a foundation, we want <span className="red-text-b">future generations</span> of students to realize the potential Esports has for the industry and demonstrate to educators as well the success and positive impact Esports can have in schools. Everyone here at OHSEA understand the challenges that are presented and are committed give students a chance at an opportunity to try something new.</Subtitle2>

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