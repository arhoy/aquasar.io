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
          title={`Low Commission Rates`}
          text={`7% per order and no setup fees or monthly fees. In addition, get local SEO and Facebook Ads for free. Qualified restaurants only. Reduce the 30% fees from other third party platforms by offering pickup order discounts and in-house delivery `}
        />
        <Accordian
          title={`Real Time Notifications`}
          text={`No more missed orders via email, get instant alerts to your phone (landline or cell), text messages and see all orders come into your tablet.`}
        />
        <Accordian
          title={`Thermal Printing`}
          text={`Easily print out all your orders automatically. If you need printers, we have can help you get them through our local resellers quickly.`}
        />
        <Accordian
          title={`Facebook Ads`}
          text={` Get FB ad management for FREE, including weekly social posts and professionally written ad copy to increase more visits and orders from your website`}
        />
        <Accordian
          title={`Domain Name and Hosting`}
          text={`No website? No problem. You can use your domain to take all orders from your restaurant.`}
        />
      </SubContainer>
      <SubContainer>
        <TitleContainer>
          <Title>
            <div className="secondary">
              <StyledLink className="animate">
                <a href="tel:587-501-7726">Call Today </a>
              </StyledLink>
              to get Started with our premium online ordering deal for
              restaurants.
            </div>
          </Title>
        </TitleContainer>
      </SubContainer>
    </Container>
  );
};

export default StarterPackage;
