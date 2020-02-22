import React from 'react';
import styled from '@emotion/styled';
import Service from './Service';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${props => props.theme.screenSize.fourTwentyFive}) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

export const ServicesDigitalAds = () => {
  return (
    <Container>
      <Service
        border={true}
        title={`Facebook Ads`}
        items={[
          `Facebook Ads`,
          `Instagram Ads`,
          `FB Lead Generation`,
          `Generate More Likes`,
          `Increase Post Engagement`,
          `Targeting Optimization`,
        ]}
      />
      <Service
        border={true}
        title={`Google Ads`}
        items={[
          `Search Ads`,
          `Display Ads`,
          `Call Only Ads`,
          `Responsive Search Ads`,
          `Structured Snippets`,
          `Ad Extensions`,
          `Remarketing Ads`,
        ]}
      />
      <Service
        border={true}
        title={`Other Platforms`}
        items={[
          `LinkedIn Ads`,
          `Microsoft Ads`,
          `Taboola Ads`,
          `Yahoo Ads`,
          `Kijiji Ads`,
          `Other Platforms`,
        ]}
      />
      <Service
        title={`Optimization`}
        items={[
          `Google Analytics`,
          `Keyword Optimization`,
          `Ad Copy Testing`,
          `Bid and Budget Management`,
          `Target Adjustments`,
          `Ad Extensions`,
          `Reporting`,
        ]}
      />
    </Container>
  );
};
