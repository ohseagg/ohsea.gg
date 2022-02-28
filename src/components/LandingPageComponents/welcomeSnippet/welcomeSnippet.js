import React from 'react'
import {InfoContainer, Buttonfill, InfoRow, Column1, Column2, TextWrapper, TopLine, Subtitle, ImgWrap, Img, Subtitle2} from './welcomeSnippetElements.js'
import placeholder from '../../../images/gatsby-icon.png'


const WelcomeSnippet = () => {
  return (
      <InfoContainer>
        <InfoRow>
          
          <Column1>
            <TopLine>Esports in High School</TopLine>
              <TextWrapper>                        

                  <Subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Subtitle>
                  <Subtitle2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Subtitle2>

              </TextWrapper>

              <Buttonfill>Learn More</Buttonfill>
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

export default WelcomeSnippet