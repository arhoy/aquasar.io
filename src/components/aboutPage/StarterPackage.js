import React from 'react';

import styled from '@emotion/styled';

import Accordian from '../reusableStyles/accordian/Accordian';

const StyledLink = styled.span`
  position: relative;
  display: inline;
  color: ${props => props.theme.colors.black};
  text-decoration: none;
  margin: 0 3px;
  cursor: pointer;

  &:before {
    position: absolute;
    background: ${props => props.theme.colors.black};
    bottom: 0px;
    left: 0;
    width: 0px;
    height: 3px;
    content: '';
    transition: all 0.3s ease-in;
  }
  &:hover {
    &:before {
      width: 100%;
    }
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  grid-gap: 2rem;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    grid-template-columns: 1fr;
  }
`;

const SubContainer = styled.div``;

const Title = styled.h4`
  font-weight: 500;
  font-size: 2.3rem;
  & .primaryBold {
    color: ${props => props.theme.colors.primary};
    font-weight: 700;
  }
  & .primary {
    margin-bottom: 2rem;
  }
`;

const TitleContainer = styled.div`
  &:hover {
    & ${StyledLink} {
      &:before {
        width: 100%;
      }
    }
  }
`;

const StarterPackage = () => {
  return (
    <Container>
      <SubContainer>
        <Accordian
          title={`Website`}
          text={`We will create a custom made, secure, fast, and easily maintainable website that is scalable for any business. Google Analytics and SSL Certificates included`}
        />
        <Accordian
          title={`Google My Business`}
          text={`We will set up a Google My Business Account for you so people in your area can find you. In addition, we can also set up your very first ad account in Google and help you manage this for the first month for free`}
        />
        <Accordian
          title={`G Suite`}
          text={`We can set up G Suite for you. Get professional with a business gmail account! Google G Suite fees apply`}
        />
        <Accordian
          title={`Facebook Business Manager`}
          text={` We can help you setup your Facebook Business Manager Account and create your Facebook Business Page. We can run ads and boost posts for you for the first month free`}
        />
        <Accordian
          title={`Domain Name and Hosting`}
          text={` We host your website for you with SSL for as little as $10/month. We can help you find and select your domain name that is suitable for your brand and business goals`}
        />
      </SubContainer>
      <SubContainer>
        <TitleContainer>
          <Title>
            <div className="secondary">
              <StyledLink className="animate"> Call Today </StyledLink>
              to get Started with our Small Business
              <span className="primaryBold"> Starter</span> Package
            </div>
          </Title>
        </TitleContainer>
      </SubContainer>
    </Container>
  );
};

export default StarterPackage;
