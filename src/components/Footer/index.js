import React from 'react'
import { FooterContainer, FooterWrapper, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLink, SocialMediaWrap, Brand, FooterImg, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink } from './FooterElements'
import { FaInstagram, FaTwitter, FaTwitch, FaYoutube, FaDiscord } from "react-icons/fa";

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrapper>
                <SocialMediaWrap>
                    <Brand>
                        <FooterImg to='/'>
                            <img src={require('../../images/Logo.png').default} alt="OHSEA logo"/>
                        </FooterImg>
                        <SocialLogo>OHSEA</SocialLogo>
                    </Brand>
                    <WebsiteRights>© {new Date().getFullYear()} Ontario High School Esports Association</WebsiteRights>

                    <SocialIcons>
                        <SocialIconLink href ="https://discord.gg/DB2zUppwSa" target="_blank" aria-label="Discord"> <FaDiscord/> </SocialIconLink>
                        <SocialIconLink href ="https://www.twitch.tv/ohseagg" target="_blank" aria-label="Twitch"> <FaTwitch/> </SocialIconLink>
                        <SocialIconLink href ="https://www.instagram.com/ohseagg/?hl=en" target="_blank" aria-label="Instagram"> <FaInstagram/> </SocialIconLink>
                        <SocialIconLink href ="https://www.youtube.com/channel/UCC3HAyKsC8sUIjxelGkof6g" target="_blank" aria-label="Youtube"> <FaYoutube/> </SocialIconLink>
                        <SocialIconLink href ="https://twitter.com/ohseagg" target="_blank" aria-label="Twitter"> <FaTwitter/> </SocialIconLink>
                    </SocialIcons>

                </SocialMediaWrap>

                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                                <FooterLink
                                to='/events'
                                >Events</FooterLink>
                                <FooterLink
                                to='/about'
                                >About</FooterLink>
                                <FooterLink
                                to='/contact'
                                >Contact</FooterLink>
                                <FooterLink
                                to='/partners'
                                >Partners</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>

            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer
