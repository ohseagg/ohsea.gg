import React from 'react'
import { FooterContainer, FooterWrapper, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLink, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink } from './FooterElements'
import { FaInstagram, FaTwitter, FaTwitch, FaYoutube, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrapper>
                <SocialMediaWrap>
                    <SocialLogo>OHSEA</SocialLogo>
                    <WebsiteRights>Copyright</WebsiteRights>

                    <SocialIcons>
                        <SocialIconLink href ="/" target="_blank" aria-label="Twitch"> <FaTwitch/> </SocialIconLink>
                        <SocialIconLink href ="/" target="_blank" aria-label="Twitter"> <FaTwitter/> </SocialIconLink>
                        <SocialIconLink href ="/" target="_blank" aria-label="Youtube"> <FaYoutube/> </SocialIconLink>
                        <SocialIconLink href ="/" target="_blank" aria-label="Linkedin"> <FaLinkedin/> </SocialIconLink>
                        <SocialIconLink href ="/" target="_blank" aria-label="Instagram"> <FaInstagram/> </SocialIconLink>
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
