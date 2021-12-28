import React from 'react'
import { FooterContainer, FooterWrapper, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink } from './FooterElements'
import { FaInstagram, FaTwitter, FaTwitch, FaYoutube, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterLinksContainer>

                    <FooterLinksWrapper>
                        <FooterLinkItems>
                                <FooterLinkTitle> Kenny </FooterLinkTitle>
                                <FooterLink> About Us</FooterLink>
                                <FooterLink> About Us</FooterLink>
                                <FooterLink> About Us</FooterLink>
                                <FooterLink> About Us</FooterLink>
                                <FooterLink> About Us</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                                <FooterLinkTitle> Kenny </FooterLinkTitle>
                                <FooterLink> About Us</FooterLink>
                                <FooterLink> About Us</FooterLink>
                                <FooterLink> About Us</FooterLink>
                                <FooterLink> About Us</FooterLink>
                                <FooterLink> About Us</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                                <FooterLinkTitle> Kenny </FooterLinkTitle>
                                <FooterLink> About Us</FooterLink>
                                <FooterLink> About Us</FooterLink>
                                <FooterLink> About Us</FooterLink>
                                <FooterLink> About Us</FooterLink>
                                <FooterLink> About Us</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                                <FooterLinkTitle> Kenny </FooterLinkTitle>
                                <FooterLink> About Us</FooterLink>
                                <FooterLink> About Us</FooterLink>
                                <FooterLink> About Us</FooterLink>
                                <FooterLink> About Us</FooterLink>
                                <FooterLink> About Us</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>

                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo>OHSEA</SocialLogo>
                        <WebsiteRights>Copyright</WebsiteRights>

                        <SocialIcons>
                            <SocialIconLink href ="/" targe="_blank" aria-label="Twitch"> <FaTwitch/> </SocialIconLink>
                            <SocialIconLink href ="/" targe="_blank" aria-label="Youtube"> <FaYoutube/> </SocialIconLink>
                            <SocialIconLink href ="/" targe="_blank" aria-label="Twitter"> <FaTwitter/> </SocialIconLink>
                            <SocialIconLink href ="/" targe="_blank" aria-label="Linkedin"> <FaLinkedin/> </SocialIconLink>
                            <SocialIconLink href ="/" targe="_blank" aria-label="Instagram"> <FaInstagram/> </SocialIconLink>
                        </SocialIcons>

                    </SocialMediaWrap>
                </SocialMedia>

            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer
