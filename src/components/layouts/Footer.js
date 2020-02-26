import React from 'react';

import socialIcons from '../../constants/socialIcons';

import styled from '@emotion/styled';
import { FaCanadianMapleLeaf } from 'react-icons/fa';
import { A } from '../reusableStyles/typography/Typography';

const d = new Date().getFullYear();

const FooterStyle = styled.div`
  background: ${props => props.theme.colors.lightgrey};
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
      <A href="tel:587-772-5536">587-772-5536</A>
      <FooterBlurb>Aquasar.io {d} &copy; </FooterBlurb>
      <Attribution>Professional | Afforadable | Fast</Attribution>
    </FooterStyle>
  );
};

export default Footer;
