import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  //SocialLogo,
  //SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from './Footer.elements';

function Footer() {
  return (
    <FooterContainer>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>THERAPHY SERVICES</FooterLinkTitle>
            <FooterLink to='/sign-up'>physical theraphy</FooterLink>
            <FooterLink to='/'>worker'comp rehab</FooterLink>
            <FooterLink to='/'>Sports Medicine</FooterLink>
            <FooterLink to='/'>Hand Theraphy</FooterLink>
            <FooterLink to='/'>Women's Health</FooterLink>
            <FooterLink to='/'>Speciality Theraphies</FooterLink>
            <FooterLink to='/'>Home Health</FooterLink>
            <FooterLink to='/'>Complimentary Injury Screenings</FooterLink>
            <FooterLink to='/'>Fitness Centers</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>NEW PATIENT INFO</FooterLinkTitle>
            <FooterLink to='/'>Find a location</FooterLink>
            <FooterLink to='/'>FAQ</FooterLink>
            <FooterLink to='/'>Insurance</FooterLink>
            <FooterLink to='/'>New Patient Rooms</FooterLink>
            <FooterLink to='/'>Medical Records</FooterLink>
            <FooterLink to='/'>Patient Stories</FooterLink>
            <FooterLink to='/'>Pay My Bill</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>More on ATI</FooterLinkTitle>
            <FooterLink to='/'>About ATI</FooterLink>
            <FooterLink to='/'>Business Solutions</FooterLink>
            <FooterLink to='/'>Careers</FooterLink>
            <FooterLink to='/'>Community OutReach</FooterLink>
            <FooterLink to='/'>News</FooterLink>
            <FooterLink to='/'>Videos</FooterLink>
            <FooterLink to='/'>Mobile App</FooterLink>
            <FooterLink to='/'>Blog</FooterLink>
            <FooterLink to='/'>Contact Us</FooterLink>
            <FooterLink to='/'>Investors</FooterLink>
          </FooterLinkItems>
          
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>          
          <WebsiteRights>ATI Physical Therapy © 2021  |  1.855.MY.ATIPT
          </WebsiteRights>
          <SocialIcons>
            <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href=''
            target='_blank' aria-label='Instagram'>
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink
              href=''
              rel='noopener noreferrer'
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='LinkedIn'>
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;
