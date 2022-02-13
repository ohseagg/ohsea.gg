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
                    <WebsiteRights>Copyright</WebsiteRights>

                    <SocialIcons>
                        <SocialIconLink href ="/" target="_blank" aria-label="Discord"> <FaDiscord/> </SocialIconLink>
                        <SocialIconLink href ="/" target="_blank" aria-label="Twitch"> <FaTwitch/> </SocialIconLink>
                        <SocialIconLink href ="/" target="_blank" aria-label="Instagram"> <FaInstagram/> </SocialIconLink>
                        <SocialIconLink href ="/" target="_blank" aria-label="Youtube"> <FaYoutube/> </SocialIconLink>
                        <SocialIconLink href ="/" target="_blank" aria-label="Twitter"> <FaTwitter/> </SocialIconLink>
                    </SocialIcons>

                </SocialMediaWrap>

                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                                <FooterLink>Events & Leagues</FooterLink>
                                <FooterLink>About</FooterLink>
                                <FooterLink>Account</FooterLink>
                                <FooterLink>Support</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                                <FooterLink>Guidelines</FooterLink>
                                <FooterLink>Partners</FooterLink>
                                <FooterLink>Privacy</FooterLink>
                                <FooterLink>Terms of Use</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>

            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer
