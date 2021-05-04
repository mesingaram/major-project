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
            <FooterLink to='/physical-theraphy'>physical theraphy</FooterLink>
            <FooterLink to='/workers-comp-rehab'>workers' Comp rehab</FooterLink>
            <FooterLink to='/sports-medicine'>Sports Medicine</FooterLink>
            <FooterLink to='/hand-theraphy'>Hand Theraphy</FooterLink>
            <FooterLink to='/womens-health'>Women's Health</FooterLink>
            <FooterLink to='/speciality-theraphies'>Speciality Theraphies</FooterLink>
            <FooterLink to='/home-health'>Home Health</FooterLink>
            <FooterLink to='/complimentary-injury-screenings'>Complimentary Injury Screenings</FooterLink>
            <FooterLink to='/fitness-centers'>Fitness Centers</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>NEW PATIENT INFO</FooterLinkTitle>
            <FooterLink to='/find-location'>Find a location</FooterLink>
            <FooterLink to='/FAQ'>FAQ</FooterLink>
            <FooterLink to='/insurance'>Insurance</FooterLink>
            <FooterLink to='/new-patient-rooms'>New Patient Rooms</FooterLink>
            <FooterLink to='/medical-records'>Medical Records</FooterLink>
            <FooterLink to='/patient-stories'>Patient Stories</FooterLink>
            <FooterLink to='/pay-my-bill'>Pay My Bill</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>More on ATI</FooterLinkTitle>
            <FooterLink to='/about-ati'>About ATI</FooterLink>
            <FooterLink to='/business-solutions'>Business Solutions</FooterLink>
            <FooterLink to='/careers'>Careers</FooterLink>
            <FooterLink to='/community-outreach'>Community OutReach</FooterLink>
            <FooterLink to='/news'>News</FooterLink>
            <FooterLink to='/videos'>Videos</FooterLink>
            <FooterLink to='/mobile-app'>Mobile App</FooterLink>
            <FooterLink to='/blog'>Blog</FooterLink>
            <FooterLink to='/contact-us'>Contact Us</FooterLink>
            <FooterLink to='/investors'>Investors</FooterLink>
          </FooterLinkItems>
          
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>          
          <WebsiteRights>ATI Physical Therapy © 2021  |  1.855.MY.ATIPT
          </WebsiteRights>
          <SocialIcons>
            <SocialIconLink href='' target='_blank' aria-label='Facebook'>
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
            <SocialIconLink href='' target='_blank' aria-label='Twitter'>
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink href='' target='_blank' aria-label='LinkedIn'>
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;
