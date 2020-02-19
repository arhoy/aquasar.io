import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

import PropTypes from 'prop-types';

import { H2 } from '../reusableStyles/typography/Typography';

const pulse = keyframes`
from,
11.1%,
to {
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

22.2% {
  -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);
  transform: skewX(-12.5deg) skewY(-12.5deg);
}

33.3% {
  -webkit-transform: skewX(6.25deg) skewY(6.25deg);
  transform: skewX(6.25deg) skewY(6.25deg);
}

44.4% {
  -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);
  transform: skewX(-3.125deg) skewY(-3.125deg);
}

55.5% {
  -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);
  transform: skewX(1.5625deg) skewY(1.5625deg);
}

66.6% {
  -webkit-transform: skewX(-0.78125deg) skewY(-0.78125deg);
  transform: skewX(-0.78125deg) skewY(-0.78125deg);
}

77.7% {
  -webkit-transform: skewX(0.390625deg) skewY(0.390625deg);
  transform: skewX(0.390625deg) skewY(0.390625deg);
}

88.8% {
  -webkit-transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
}
`;

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  padding: 4rem 0;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    flex-direction: column-reverse;
  }
`;

const ContentContainer = styled.div`
  margin-right: 2rem;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    margin-top: 3rem;
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10rem;
  color: ${props => props.theme.colors.primary};
  animation: ${pulse} 4s infinite;
`;

const Header = styled(H2)`
  color: ${props => props.theme.colors.secondary};
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    text-align: center;
  }
`;

const SubHeading = styled.h3`
  font-size: 2.2rem;
  margin-bottom: 2rem;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    text-align: center;
  }
`;
const TextContainer = styled.ul`
  display: inline;
`;

const WebsiteFeatureSection = ({
  heading,
  subheading,
  text,
  icon,
  iconSize,
  rotate,
  color,
}) => {
  return (
    <Container>
      <ContentContainer>
        <Header>{heading}</Header>
        <SubHeading> {subheading} </SubHeading>
        <TextContainer>{text}</TextContainer>
      </ContentContainer>
      <IconContainer
        style={{ fontSize: `${iconSize}`, transform: `${rotate}`, color }}
      >
        {icon}
      </IconContainer>
    </Container>
  );
};

WebsiteFeatureSection.propTypes = {
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string.isRequired,
  text: PropTypes.object.isRequired,
};

export default WebsiteFeatureSection;
