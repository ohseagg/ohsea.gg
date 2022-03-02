import styled from 'styled-components'
import {colors} from '../../globals/colors'
import {Link} from 'gatsby'

export const FooterContainer = styled.footer`
    background-color: ${colors.background};
`

export const FooterWrapper = styled.div`
    padding: 48px 0px;
    display: flex;
    flex-direction: row; 
    justify-content: space-between;
    align-items: center;
    max-width: 90%;
    width: 1250px;
    margin: 0 auto; 
`

export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center; 

    @media screen and (max-width: 820px){
        padding-top: 32px;
    }
`

export const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px){
        flex-direction: column; 
    }
`

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end; 
    width: 180px;
    box-sizing: border-box;
    color: ${colors.white}; 

    @media screen and (max-width: 420px){
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`

export const FooterLink = styled(Link)`
    color: ${colors.white};
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size:0.9rem;
    transition: all 0.1s ease-in-out; 

    &:hover{
        cursor: pointer;    
        color : ${colors.red};
        transition: all 0.1s ease-in-out; 
    }
    
`

//social icons 

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between; 
    align-items: flex-start;
    width: 1250px;
    max-width: 90%;
    flex-direction: column;

    @media (max-width: 820px){

    }
`

export const Brand = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`

export const FooterImg = styled(Link)`
    margin-bottom: 0.7rem;
    // margin-top 0.3rem;
    margin-right: 10px;
`

export const SocialLogo = styled.p`
    color: ${colors.white}; 
    text-decoration: none; 
    font-size: 1.5rem; 
    display: flex; 
    align-items: center;
    margin-bottom: 16px; 
    font-family: 'UsualBold', sans-serif;
`

export const WebsiteRights = styled.small`
    color: ${colors.white}; 
    margin-bottom: 16px; 
`

export const SocialIcons = styled.div`
    display: flex; 
    justify-content: space-between; 
    align-items; center; 
    width: 240px;
`

export const SocialIconLink = styled.a`
    color: ${colors.white}; 
    font-size: 24px;
    transition: all 0.1s ease-in-out; 
    
    &:hover{
        color: ${colors.red}; 
        transition: all 0.1s ease-in-out; 
    }
`