import React from 'react';

import socialIcons from '../../constants/socialIcons';

import styled from '@emotion/styled';
import { FaCanadianMapleLeaf } from 'react-icons/fa';
import { A } from '../reusableStyles/typography/Typography';
import NoStyleLink from '../Links/NoStyleLink';

const d = new Date().getFullYear();

const FooterStyle = styled.div`
  background: ${props => props.theme.colors.lightgrey};
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & .codepaper {
    font-size: 1.4rem;
    text-align: center;
  }
`;

const SocialIcon = styled.a`
  color: ${props => props.theme.colors.black};
  font-size: 3rem;
  margin: 1rem;
  padding: 1rem;
`;

const StyledImage = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  color: ${props => props.theme.colors.primary};
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Attribution = styled.p`
  font-size: 1.2rem;
`;

const FooterBlurb = styled.p`
  font-weight: bold;
`;

const LegalLinksContainer = styled.div`
  display: flex;
  font-size: 1.2rem;
  ${NoStyleLink} {
    margin: 0 4px;
  }
`;

const Footer = () => {
  return (
    <FooterStyle>
      <ul>
        {socialIcons.map(icon => (
          <SocialIcon
            key={icon.url}
            href={icon.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {icon.icon}
          </SocialIcon>
        ))}
      </ul>
      <Div>
        Made In |
        <StyledImage>
          <FaCanadianMapleLeaf />
        </StyledImage>
        | Alberta
      </Div>
      <A href="tel:587-501-7726">587-501-7726</A>
      <FooterBlurb>Aquasar.io {d} &copy; </FooterBlurb>
      <A className="codepaper" href="https://codepaper.dev">
        CODEPAPER
      </A>
      <Attribution>Professional | Affordable | Fast</Attribution>

      <LegalLinksContainer>
        <NoStyleLink to="/privacy-policy">Privacy Policy</NoStyleLink>
        <NoStyleLink to="/terms-and-conditions">Terms & Conditions</NoStyleLink>
      </LegalLinksContainer>
    </FooterStyle>
  );
};

export default Footer;
