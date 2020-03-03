import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import { H2 } from '../reusableStyles/typography/Typography';

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
  color: ${props => props.theme.colors.primaryDark};

  transform: rotate(15deg);

  @media (min-width: ${props => props.theme.screenSize.mobileL}) {
    opacity: ${props => (props.setPosition ? 1 : 0)};
    transform: ${props =>
      props.setPosition
        ? `translate(0) rotate(15deg)`
        : `translate(-25rem,-100px)`};
  }

  transition: all 0.9s ease-in;
`;

const Header = styled(H2)`
  color: ${props => props.theme.colors.secondary};

  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    margin-bottom: 1rem;
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

const JetFeatureSection = ({
  heading,
  subheading,
  text,
  icon,
  iconSize,

  color,
  setPosition,
}) => {
  return (
    <Container>
      <ContentContainer>
        <Header>{heading}</Header>
        <SubHeading> {subheading} </SubHeading>
        <TextContainer>{text}</TextContainer>
      </ContentContainer>
      <IconContainer
        setPosition={setPosition}
        style={{ fontSize: `${iconSize}`, color }}
      >
        {icon}
      </IconContainer>
    </Container>
  );
};

JetFeatureSection.propTypes = {
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string.isRequired,
  text: PropTypes.object.isRequired,
};

export default JetFeatureSection;
