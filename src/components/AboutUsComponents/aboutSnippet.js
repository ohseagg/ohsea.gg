import React from 'react'
import styled from "styled-components"
import {colors} from '../../globals/colors.js'
import placeholder from '../../images/logoSpring.png'
import '../../styles/style.scss'


const AboutSnippet = () => {
  return (
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
  )
}

const InfoContainer = styled.div`
    color: ${colors.background};
    margin-bottom: 6rem;
    margin-top: 18rem;
    display: flex;
    justify-content: center;
    @media screen and (max-width: 768px){
        padding: 100px 0; 
    }
`

const InfoRow = styled.div`
    display: grid;
    grid-gap: 7rem;
    grid-auto-columns: minmax(auto, 1fr); 
    align-items: center;
    grid-template-areas: "col1 col2" ;
    width: 1250px;
    max-width: 90%;


    @media screen and (max-width: 768px) {
        grid-template-areas: 'col1' 'col2';
    }
`

const Column1 = styled.div`
    grid-area: col1; 
    width: 600px;
    
`

const Column2 = styled.div`
    margin-bottom: 15px; 
    grid-area: col2; 
`

const TextWrapper = styled.div`
    max-width: 700px; 

  
    @media screen and (max-width: 480px){
        position: relative;
        right: 1rem;
    }
`

const TopLine = styled.p`
    color: black; 
    font-size: 30px; 
    position: relative;
    line-height: 16px; 
    font-family: 'UsualBold', sans-serif; 
    letter-spacing: 1.4px; 
    margin-bottom: 2em;
    
    @media screen and (max-width: 768px){
        top: 0;
    }
    `
    
    const Subtitle = styled.p`
    max-width: 1000px;
    font-size: 1rem; 
    line-height: 1.9rem; 
    color: black; 
`

const Subtitle2 = styled.p`
    max-width: 1000px; 
    margin-bottom: 35px;
    margin-top: 24px; 
    font-size: 1rem; 
    line-height: 1.9rem; 
    color: black; 
`


const ImgWrap = styled.div`
    max-width: 555px; 
    height: 100%
`

const Img = styled.img`
    padding-right: 0;
`



export default AboutSnippet